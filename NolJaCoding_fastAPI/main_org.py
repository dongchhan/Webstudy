# mvc(model, veiw, controller)로 나누기 전 하나의 main.py로 개발한 내용

from typing import Union 
from fastapi import FastAPI 

app = FastAPI() 

@app.get("/")
def read_root():
  return {"Hello": "World"}
  
@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None]):
  '''
  - 경로에서 item_id:int를 받아온다
  - Union[X, Y]: 값이 X또는 Y타입일 수 있다. >> Optional[str] 로 대체가능
  - GET /items/123?q=hello  -> item_id: 123, q:'hello'
  '''
  return {"item_id": item_id, "q": q}