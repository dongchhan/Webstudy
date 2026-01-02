# controller/items.py 

from typing import Union 
from fastapi import APIRouter 


router = APIRouter(
    prefix="/items",
    tags=["items"],  # Swagger API 문서에서 라우트 카테고리를 지정해준 것
    responses={404: {"description": "Not found"}},  # 404 응답이 발생할 수 있음을 나타낸것
  )
  
@router.get("/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):  # 디폴트 None 설정해둬서 없을 경우 에러 방지 
  return {"item_id": item_id, "q": q} 