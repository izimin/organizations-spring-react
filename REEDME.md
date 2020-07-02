# **BACK-END**
# liquibase:
clean install -DskipTests -Dhost=35.193.69.190 -Dport=5432 -Ddb=test -Dlogin=postgres -Dpassword=postgres
<br>профиль: **liquibase**

# jOOQ: 
clean install -DskipTests -Dhost=35.193.69.190 -Dport=5432 -Ddb=test -Dlogin=postgres -Dpassword=postgres
<br>профиль: **codegen**

# Spring:
-DdbHost=35.193.69.190<br>
-DdbPortNumber=5432<br>
-DdatabaseName=test<br>
-DdbUser=postgres<br>
-DdbPassword=postgres<br>
-Dserver.port=8081

<hr>

# **FRONT-END**
npm i<br>
npm run local