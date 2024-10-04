/*eslint-disable*/
//This is wherer we will handle all the functionalities related to updating user settings via account page
const updateUserPassword = async (currentP,newP,confirmP)=>{
    try{
        const res = await axios({
            method:"PATCH",
            url:"/api/v1/users/updatePassword",
            data:{
                currentPassword:currentP,
                newPassword:newP,
                newPasswordConfirm:confirmP
            }
        })
        if(res.data.status==="Created Successfully"){
            showAlert('success',"Info Updated")
        }
    }catch(err){
        showAlert('error',err.response.data.message)
    } 
}

const updateUserInfo = async (form)=>{
  try{
    const res = await axios({
        method:"PATCH",
        url:"/api/v1/users/updateMe",
        data:form
      })
      if(res.data.status==="Successfully Updated"){
        showAlert('success',"Info Updated")
      }
        location.reload(true)
  }catch(err){
    showAlert('error',err.response.data.message)
  }
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('user-info-update-form').addEventListener('submit',e=>{
        e.preventDefault();

        //We need to send In a form element that will contain image/files also
        const form = new FormData()
        
        //Now appending data to our new form object
        if(document.getElementById('name').value!==undefined)
        form.append('name',document.getElementById('name').value)
        if(document.getElementById('email').value!==undefined)
        form.append('email',document.getElementById('email').value)
        if(document.getElementById('photo').value!==undefined)
        form.append('photo',document.getElementById('photo').files[0])  //Files[0] since files is a an array of all the files
        updateUserInfo(form)
    })
})

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('user-password-update-form').addEventListener('submit',e=>{
        e.preventDefault();
        const password_current = document.getElementById('password-current').value
        const password = document.getElementById('password').value
        const password_confirm = document.getElementById('password-confirm').value
        updateUserPassword(password_current,password,password_confirm)
    })
})
