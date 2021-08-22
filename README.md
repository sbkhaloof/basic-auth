

# Lab 06 : Basic-Auth
##### Author : Ibrahim Khdairat 

* [GitHub Repo Link](https://github.com/sbkhaloof/basic-auth)

* [Pull Request](https://github.com/Ibrahim-Khdairat/basic-auth/pull/1)

* [Heroku Link](https://ibrahim-basic-auth.herokuapp.com/) : https://ibrahim-basic-auth.herokuapp.com/


## setup
### .env
+ PORT
+ POSTGRES_URI
Endpoints:
* ##### 1 -  `/status`
https://siham-basic-auth.herokuapp.com/status
Returns Object

>{
  "domain": "siham-basic-auth.herokuapp.com",
  "status": "running",
  "port": 3000
}

* ##### 2 -  `/signin`
`using get method`
https://siham-basic-auth.herokuapp.com/signin

***If the user is existed***
Returns Object
> {
    "id": 1,
    "userName": "siham",
    "userPassword": "$2b$10$dAdXSKPY033lSHmheld5.efoMcifE6Z77ZXauuqOY260JL88x6Q9m",
    "createdAt": "2021-08-22T18:19:02.413Z",
    "updatedAt": "2021-08-22T18:19:02.413Z"
}

***If the user not existed or the password is wrong existed***

Returns
> "Invalid User"



* ##### 3 -  `/signup`
`using post method`
https://ibrahim-basic-auth.herokuapp.com/signup

***If the user not existed***
Returns Object
> {
    "id": 4,
    "userName": "Ashjan Albarqi",
    "userPassword": "$2b$10$3q24YyaNF3DA/JA4Jp2Hb.OOHV7AbcTkQkZ0TiX0caqXZhn.Wt65y",
    "updatedAt": "2021-08-22T19:27:24.870Z",
    "createdAt": "2021-08-22T19:27:24.870Z"
}

***If the user is existed***

Returns
> "Error In Creating User"
### UML 
![](uml-lab6.PNG)