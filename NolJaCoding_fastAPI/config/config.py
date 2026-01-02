# config/config.py  

# PGSQL_TEST_DATABASE_STRING = "{로컬호스트} dbname={생성한 DB명} user={등록한 유저명} password={등록한 비번} port={5432}"
PGSQL_TEST_DATABASE_STRING = 'host=127.0.0.1 dbname=test_db user=test_user password=test123 port=5432'
PGSQL_TEST_POOL_MIN_SIZE = 10
PGSQL_TEST_POOL_MAX_SIZE = 10
PGSQL_TEST_POOL_MAX_IDLE = 60