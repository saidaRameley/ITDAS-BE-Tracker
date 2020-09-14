//import app from "./firebase"
import Swal from 'sweetalert2';
import axios from 'axios';
//var ldap = require('ldap');
//var assert = require('assert');
//var swig = require('swig');
// var express =require('express');
// const app = express();
//const ldap = require('ldapjs');
// const client = ldap.createClient({
//   url: 'ldap://10.45.236.28:636'
// });
// console.log('client',client);

//const ldapUser = "cn=NICEldapadmin,ou=serviceAccount,o=Telekom";  //:"cn=NICEldapadmin,ou=serviceAccount,o=Telekom",
//const ldapPass = "2Fe97Bm2";  //:"Passw0rd"
class Auth {
    constructor() {
      this.authenticated = {status:false,region:"",division:"",username:"", password:"",menuSelected:""};
    }


    login(username,cb,token) {
      this.authenticated.status = true;
      this.authenticated.username = username;
      //console.log("token",token);
      //this.handleLogin();
      cb();
      
    }
  
    logout(cb) {
      this.authenticated.status = false;
      this.authenticated.username = ""
      localStorage.removeItem("requestorID");
      cb();
    }
  
    isAuthenticated() {
      return this.authenticated;
    }

    handleLogin = (username,password,cb)   =>  {
    //console.log('username',username);
    
        const dataForm = new FormData();
        dataForm.append("username", username);
        dataForm.append("password", password);
        this.authenticated.status = true;
        this.authenticated.menuSelected = "";
        this.authenticated.username = username;
        this.authenticated.password = password;
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
       
        if(username){

          axios.get('/api/DC_USER/?userid='+username.toUpperCase(),
          ).then(resp => {
           
               // console.log('d',resp.data)               
                if(!resp.data.user.length){
                  Swal.fire({
                    width: '30%',
                    icon: 'error',
                    title: 'Invalid DCO User',
                    text: 'Login error, check with DC Administrator!',
                    fontsize: '10px'
                    //footer: '<a href>Why do I have this issue?</a>'
                  })
                }
                else{
                    cb(username,cb);  
                }
        
          });
        
       }

    }

    handleLogin2 = (user,password,cb,req,res,)   =>  {
      //console.log('username',username);
      
          const dataForm = new FormData();
          dataForm.append("username", user);
          dataForm.append("password", password);
          this.authenticated.status = true;
          this.authenticated.menuSelected = "";
          this.authenticated.username = user;
          this.authenticated.password = password;
          localStorage.setItem('username', user);
          localStorage.setItem('password', password);
          //var 
      
          if(user){
            axios.get('/api/ITD_LDAP_CON11/?userid='+user.toUpperCase()+'&password='+password,
            ).then((res) => {
             //console.log('res : ', res.data);  
             if(res.data.status === 'User Success Login'){
               axios.get('/api/DC_USER/?userid='+user.toUpperCase(),
               {
                headers: {
                  Authorization: 'Bearer ' + res.data.accessToken //the token is a variable which holds the token
                }
               }
                  ).then(resp => {
                        const token = localStorage.setItem('token', res.data.accessToken);
                        //console.log('dc user',resp.data)               
                        if(!resp.data.user.length){
                          Swal.fire({
                            width: '30%',
                            icon: 'error',
                            title: 'Invalid DCO User',
                            text: 'Login error, check with DC Administrator!',
                            fontsize: '10px'
                            //footer: '<a href>Why do I have this issue?</a>'
                          })
                        }
                        else{
                            cb(user,cb,token);  
                        }
                
                  }); 
                }
              else{
                  Swal.fire({
                    icon: 'error',
                    text: 'userid:' + user + ' error:' + res.data,
                  })
                }
              })
              .catch((err) => {/**catch error upon fetch api function*/
                //console.log('failed to update : ', err);
                 Swal.fire({
                  icon: 'error',
                  text: 'catch:' + err,
                })
          })
  
         }
  
      }

    MenuSelected(menu,username,cb) {
      //console.log('selecteMenu',menu);
      this.authenticated.menuSelected = menu;
      this.authenticated.status = true;
      this.authenticated.username = username;
      //localStorage.setItem('menuSelected', menu);
      cb(username,cb)
    }

}

  export default new Auth();
