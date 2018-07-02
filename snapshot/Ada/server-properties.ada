swagger.dir=web
swagger.web.enable=false
swagger.ui.enable=true
swagger.port=8080
swagger.apps=app
swagger.users=users
swagger.key=NTk4YzEyODNhMjM4IDJjMjNkOGFiNThkYSBkZWExOTQ1MTQ2YjkgZmIxNGM4NWY4OGQzCg

app.list=1
app.1.client_id=test-app
app.1.client_secret=test-app-secret
app.1.scope=none

users.list=1,2
users.1.username=admin
users.1.password=admin
users.2.username=test
users.2.password=test

# Configuration for log4j
log4j.rootCategory=DEBUG,console,result
log4j.appender.console=Console
log4j.appender.console.level=DEBUG
log4j.appender.console.layout=level-message
log4j.appender.result=File
log4j.appender.result.File=swagger_petstore.log

# Logger configuration
log4j.logger.log=WARN
log4j.logger.Util.Properties=DEBUG
log4j.logger.Util.Log=WARN
log4j.logger.Util=DEBUG
log4j.logger.Servlet=DEBUG
log4j.logger.Util.Serialize.Mappers=WARN
log4j.logger.Util.Serialize.IO=INFO


