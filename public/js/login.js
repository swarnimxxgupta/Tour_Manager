/*eslint-disable*/
//------------------------------------------------------------------------------------
//LOGIN FUCTIONALITY
const login = async (email,password)=>{
   try{
    const res = await axios({
        method:"POST",
        url:"/api/v1/users/login",
        data:{
            email:email,
            password:password
        }
    })
    if(res.data.status==='Created Successfully'){
      showAlert('success','Logged In Successfully')   //either 'success' or 'error'
        location.assign('/')
    }
   }catch(err){
    showAlert('error',err.response.data.message)
   }
}

//------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
document.getElementById('login-form').addEventListener('submit',e=>{
    e.preventDefault();
    const email =document.getElementById('email').value
    const password = document.getElementById('password').value
    login(email,password)
})
})