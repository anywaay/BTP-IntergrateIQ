from fastapi import FastAPI, UploadFile, Body
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from io import BytesIO

from chat import (user_input, get_pdf_text, get_text_chunks, 
get_vector_store, extract_text_from_image, get_web_text, speech_to_text, convert_to_wav_bytes, text_to_speech
)
import os
import shutil
from prsnl import QA

app=FastAPI()

origins = [
    "http://localhost:5173",
    "https://integrateiq.web.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post('/chat/Question')
async def get_A(Question: str = Body(...)):
    answer = user_input(Question)
    return {'text': answer}

@app.post('/chat/audio')
async def get_A(file: UploadFile):
    print(file)
    if not os.path.exists("faiss_index"):
        return {'status': False, 'msg': 'Upload Data first'}
    if file.filename.split('.')[-1] in ['wav', 'mp3', 'aac', 'm4a']:
        audio_bytes = await file.read() 
        audio_bytes_io = BytesIO(audio_bytes)
        
        text = speech_to_text(audio_bytes_io)
        answer = user_input(text)
        return {'status':True,'text':answer,'Question': text}
    else:
        return {'status':False,'error':'Unsupported audio file type'}

@app.post('/chat/upload')
async def upload_pdf(file: UploadFile):
    if file.filename.split('.')[-1]=='pdf':
        raw_text = get_pdf_text(file.file)
    elif file.filename.lower().split('.')[-1] in ['jpg', 'png', 'jpeg' , 'img']:
        raw_text = extract_text_from_image(file.file)
    else:
        return {'error':'Unsupported file type'}
    text_chunks = get_text_chunks(raw_text)
    status=get_vector_store(text_chunks)
    return {'success':status}


@app.post('/chat/url')
async def fetch_url(url: str = Body(...)):
    raw_text = get_web_text(url)
    if not raw_text:
        return {'success':False}
    text_chunks = get_text_chunks(raw_text)
    status=get_vector_store(text_chunks)
    return {'success':status}
import base64

@app.post('/chat/tts')
async def Tts(text: str= Body(...)):
    audio = text_to_speech(text)
    audio_base64 = base64.b64encode(audio.getvalue()).decode('utf-8')
    return JSONResponse(content={
        'status': True,
        'text': text,
        'audio_base64': audio_base64,
        'audio_format': 'wav'
    })


@app.get('/chat/clear')
async def clear():
    if os.path.exists("faiss_index"):
        shutil.rmtree("faiss_index")
        return {'success':True, 'msg': 'Data cleared successfully'}
    else:
        return {'success':False, 'msg':'No data to clear'}
    
@app.post('/prsnl/Question')
async def titansAi(Q:str = Body(...)):
    ans=QA(Q)
    return {'answer':ans}
    




