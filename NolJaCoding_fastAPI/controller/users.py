# controller/users.py 

# items.py와 완전히 동일하니 코드 이해는 items.py 참고
from fastapi import APIRouter 

router = APIRouter(
  prefix="/users",
  tags=["users"],
  responses={404: {"description": "Not found"}},
  )
  
@router.get("/{user_id}")
def read_item(user_id: int):
  return {"user_id": user_id}