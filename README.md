# Microservices

## Description:

We have 3 topics: meals, ingredients and cuisines

Each time when meals, ingredients or cuisines services get request to CREATE, UPDATE, GET, DELETE any entity, message about this is placed in according topic. These services are producers

The logger service is subscribed to all 3 topics and it's writing all received messages in console. 
