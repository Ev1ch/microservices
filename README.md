# Microservices

## Description:

Service that imitates unhealthy Pod behavior - is `cuisines` sevice.  

After PATCH request to `api/v1/cuisines` route, part of next requests will be broken - they will have 5 seonds delay.  

That request must be done manualy - it has not been connected to client.  

There is a `.go` script to have such a test done. So, compiling and running [`test.go`](https://github.com/Ev1ch/microservices/blob/lab-4/test.go) gives us a simulation, that will show results.  
  
## Results of testing

|     | Before break | Immediately after | Short time after | Long time after |
| --- | --- | --- | --- | --- |
| Average time | 1.422s | 3.95s | 2.77s | 1.77s |
| Fails number | 0/100 | 0/100 | 0/100 | 0/100 |
