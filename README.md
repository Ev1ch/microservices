# Microservices
<h3>Lab 4 details:</h3>
Service that imitates unhealthy Pod behavior - is cuisine sevice. </br>
After PATCH request to <i>'api/v1/cuisines' </i> route, part of next requests will be broken - they will have 5 seonds delay. </br>
That request must be done manualy - it has not been connected to client. </br>
There is a .go script to have such a test done. </br>
So, compiling and runnig <a href='https://github.com/Ev1ch/microservices/blob/lab-4-circuit-breaker/test.go'>test.go</a> gives us a simulation, that will show results. </br>
</br>
Our results after own app testing</br></br>
<table>
  <tr>
    <th>&nbsp;</th>
    <th>Before break</th>
    <th>Immediately after</th>
    <th>Short time after</th>
    <th>Long time after</th>
  </tr>
  <tr>
    <td>Average time</td>
    <td>1.422s</td>
    <td>3.95s</td>
    <td>2.77s</td>
    <td>1.77s</td>
  </tr>
  <tr>
    <td>Fails number</td>
    <td>0/100</td>
    <td>0/100</td>
    <td>0/100</td>
    <td>0/100</td>
  </tr>
</table>
