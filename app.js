function validation(){
 var fullName = document.getElementById('user').value;
    var userEmail = document.getElementById('emailInput').value;
    var userMobil = document.getElementById('mobNumber').value;
    var userCnic = document.getElementById('cnicInput').value;
    var userAdd = document.getElementById('inputAddress').value;
    var firstPass = document.getElementById('pass_1').value;
    var secondPass = document.getElementById('pass_2').value;
    var filepath = document.getElementById('pic').value;
    // var targetPlace = document.getElementsByName('pic').value;-


    

        // ========= Starting Full Name Code ============= //

        // ======================== File Upload ================================ //

    
    // ===== PathCodeFinished
    
    if(filepath == "" ){
        document.getElementById('fileSpam').innerHTML = "** This Field is Required!";
        return false;
    }
    else{
        document.getElementById('fileSpam').innerHTML = "";
    }

    if(fullName == "" ){
        document.getElementById('userspan').innerHTML = "** This Field is Required To Fill";
    }
    else{
        var lessLength = 2;
        if(fullName.length < lessLength){
        document.getElementById('userspan').innerHTML = "It's wrong Name Please Write Your Correct name";
        checkUser = true;
        }
        var checkUser = false;
        if(fullName.length > 25){
            document.getElementById('userspan').innerHTML = "** Your Value Should be less than 25 characters";
            checkUser = true;
        }
        var checkNumber = /[0-9]/;
        if(fullName.match(checkNumber)){
            document.getElementById('userspan').innerHTML = "** Numbers are not allowed";
            checkUser = true;
        }
  
        if(checkUser == false){
            document.getElementById('userspan').innerHTML = "";
        }
        
       
    }

    // =============== on change event ================= //
   
    //====================== Full Name Input finished ================== //

    if(userEmail == ""){
        document.getElementById('emailspan').innerHTML = "This field is required to fill out";
    }
    else{
        var checkEmail = false;
        var reg =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(reg.test(userEmail)){
                document.getElementById('emailspan').innerHTML = ('The Spacile characters are not allowed   ')
        }else{
            document.getElementById('emailspan').innerHTML = "Email does'nt formated";
            checkEmail = true;
        }
        if(checkEmail == false){
            document.getElementById('emailspan').innerHTML = "";
        }
    }

    // ==================== Finished Email validation ====================== //

    if(userMobil == ""){
        document.getElementById('mobileSpan').innerHTML = "** This Field is Required To Fill ";
    }
    else{
        var checkMobileNumber = false;
        var onlyNumbers =  /^[a-zA-Z]+$/;
          
        if(userMobil.match(onlyNumbers)){
            document.getElementById('mobileSpan').innerHTML = "** Characters are not allowed";
            checkMobileNumber = true;
        }

        if(userMobil.length != 11){
            document.getElementById('mobileSpan').innerHTML = "** Please Enter The correct number";
            checkMobileNumber = true;
            
        }
            
            if(checkMobileNumber == false){
                document.getElementById('mobileSpan').innerHTML = "";
            }
        }

    // ==================== Mobile Number Input Finished =================== //
    
    if(userCnic == ""){
        document.getElementById('cnicSpam').innerHTML = "** This field is Required to fill";
    }
    else{
        var CNICCheckVar = /^[a-zA-Z]+$/;
        var checkCnicNumber = false;
        if(userCnic.match(CNICCheckVar)){
            document.getElementById('cnicSpam').innerHTML = "characters are not allowed";
            checkCnicNumber = true;
        }
        var cniclengthHere = 14;
        if(userCnic.length > cniclengthHere){
            document.getElementById('cnicSpam').innerHTML = "The Number should be less the 14 digits";
            checkMobileNumber = true;
        }
        if(userCnic.length != cniclengthHere){
            document.getElementById('cnicSpam').innerHTML = "Your Cnic length less then 14 digits please enter your correct number";
            checkCnicNumber = true;
        }
        
        if(checkCnicNumber == false){
            document.getElementById('cnicSpam').innerHTML = "";
        }

    }
   // ==================== CNIC Number Input Finished =================== // 

   if(userAdd == ""){
       document.getElementById('addressSpam').innerHTML = "It's Required To Fill Out";
       
   }
   else{
     var checkAddress = false;
    if(userAdd.length >= 25){
        document.getElementById('addressSpam').innerHTML = "The Address Characters should be less then 25 latters";
        checkAddress = true;
    }
    if(checkAddress == false){
        document.getElementById('addressSpam').innerHTML = "";
    }
}
// ====================== Address Input Finished ========================= //

if(firstPass == ""){
    document.getElementById('firstPasswordSpam').innerHTML = "** It's Required To fill out ";
}

else{   
    var checkPassword = false;
    var pass_1 = "";
    if(firstPass.match(pass_1)){
        document.getElementById('firstPasswordSpam').innerHTML = "";
        checkPassword = true;
    }
    if(firstPass.length<6){
        document.getElementById('firstPasswordSpam').innerHTML = "Your Password Length Should be Grater Than 6 Character's";
    }
    if(firstPass.length > 20){
        document.getElementById('firstPasswordSpam').innerHTML = "Your Password length Should be Less Than 20 Character's";
    }
    if(checkPassword == false){
        document.getElementById('firstPasswordSpam').innerHTML = "";
    }
}

// ====================== first Password finished ==================== //

if(secondPass == ""){
    document.getElementById('secondPasswordSpam').innerHTML = "it's Required to fill out ";
    return false;
}
else{
    var checkSecondPassword = false;
    if(secondPass != firstPass){
        document.getElementById('secondPasswordSpam').innerHTML = "Your COnfirm passsword is not similar to first One";
        checkSecondPassword = true;
        return false; 
    }
    // if(secondPass == firstPass){
    //     document.getElementById('secondPasswordSpam').submit();
    // }
    // if(secondPass )
if(secondPass.length < 6){
    document.getElementById('secondPasswordSpam').innerHTML = "Your Password Length Should be Grater Than 6 Character's";
}
if(secondPass.length > 20){
    document.getElementById('secondPasswordSpam').innerHTML = "Your Password length Should be Less Than 20 Character's";
}
if(checkSecondPassword == false){
    document.getElementById('secondPasswordSpam').innerHTML = "";
    checkSecondPasswordOK = true;
}

}
}

// Error Validation Starting From Here!!!  ============================= 
 

function usernameValid(){
    var fullName = document.getElementById('user').value;

    if(fullName == "" ){
        document.getElementById('userspan').innerHTML = "** This Field is Required To Fill";
        return false;
    }
    else{
        var lessLength = 2;
        if(fullName.length < lessLength){
        document.getElementById('userspan').innerHTML = "It's wrong Name Please Write Your Correct name";
        checkUser = true;
        }
        var checkUser = false;
        if(fullName.length > 25){
            document.getElementById('userspan').innerHTML = "** Your Value Should be less than 25 characters";
            checkUser = true;
        }
        var checkNumber = /[0-9]/;
        if(fullName.match(checkNumber)){
            document.getElementById('userspan').innerHTML = "** Numbers are not allowed";
            checkUser = true;
        }
        if(checkUser == false){
            document.getElementById('userspan').innerHTML = "";
        }
    }
}
  
// username input finished //

function emailValid(){
    var userEmail = document.getElementById('emailInput').value;
    if(userEmail == ""){
        document.getElementById('emailspan').innerHTML = "This field is required to fill out";
    }
    else{
        var checkEmail = false;
        var reg =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(reg.test(userEmail)){
                document.getElementById('emailspan').innerHTML = ('The Spacile characters are not allowed   ')
        }else{
            document.getElementById('emailspan').innerHTML = "Email does'nt formated";
            checkEmail = true;
        }
        if(checkEmail == false){
            document.getElementById('emailspan').innerHTML = "";
        }
    }
}


// email validation finished //

function mobilValid(){
     var userMobil = document.getElementById('mobNumber').value;
     if(userMobil == ""){
        document.getElementById('mobileSpan').innerHTML = "** This Field is Required To Fill ";
    }
    else{
        var checkMobileNumber = false;
        var onlyNumbers =  /^[a-zA-Z]+$/;
          
        if(userMobil.match(onlyNumbers)){
            document.getElementById('mobileSpan').innerHTML = "** Characters are not allowed";
            checkMobileNumber = true;
        }

        if(userMobil.length != 11){
            document.getElementById('mobileSpan').innerHTML = "** Please Enter The correct number";
            checkMobileNumber = true;
            
        }
            
            if(checkMobileNumber == false){
                document.getElementById('mobileSpan').innerHTML = "";
            }
        }
}

// number finished //


function CnicValid(){
   var userCnic = document.getElementById('cnicInput').value;
   if(userCnic == ""){
    document.getElementById('cnicSpam').innerHTML = "** This field is Required to fill";
}
else{
    var CNICCheckVar = /^[a-zA-Z]+$/;
    var checkCnicNumber = false;
    if(userCnic.match(CNICCheckVar)){
        document.getElementById('cnicSpam').innerHTML = "characters are not allowed";
        checkCnicNumber = true;
    }
    var cniclengthHere = 14;
    if(userCnic.length > cniclengthHere){
        document.getElementById('cnicSpam').innerHTML = "The Number should be less the 14 digits";
        checkMobileNumber = true;
    }
    if(userCnic.length != cniclengthHere){
        document.getElementById('cnicSpam').innerHTML = "Your Cnic length not equal to  14 digits please enter your correct number";
        checkCnicNumber = true;
    }
    
    if(checkCnicNumber == false){
        document.getElementById('cnicSpam').innerHTML = "";
    }
}
}

// CNIC validation finished //

function AddressValid(){
    var userAdd = document.getElementById('inputAddress').value;
    if(userAdd == ""){
        document.getElementById('addressSpam').innerHTML = "It's Required To Fill Out";
    }
    else{
      var checkAddress = false;
     if(userAdd.length >= 25){
         document.getElementById('addressSpam').innerHTML = "The Address Characters should be less then 25 latters";
         checkAddress = true;
     }
     if(checkAddress == false){
         document.getElementById('addressSpam').innerHTML = "";
     }
 }
}

// Address validation finished //

function passwordOneValid(){
    var firstPass = document.getElementById('pass_1').value;
    
    if(firstPass == ""){
        document.getElementById('firstPasswordSpam').innerHTML = "** It's Required To fill out ";
    }
    
    else{   
        var checkPassword = false;
        var pass_1 = "";
        if(firstPass.match(pass_1)){
            document.getElementById('firstPasswordSpam').innerHTML = "";
            checkPassword = true;
         
        }
        if(firstPass.length<6){
            document.getElementById('firstPasswordSpam').innerHTML = "Your Password Length Should be Grater Than 6 Character's";
        }
        if(firstPass.length > 20){
            document.getElementById('firstPasswordSpam').innerHTML = "Your Password length Should be Less Than 20 Character's";
        }
        if(checkPassword == false){
            document.getElementById('firstPasswordSpam').innerHTML = "";

        }
    }
}

// first password validation finished //

function passwordOneValidConfirm(){
    var secondPass = document.getElementById('pass_2').value;
    var first_Pass = document.getElementById('pass_1').value;

    if(secondPass == ""){
        document.getElementById('secondPasswordSpam').innerHTML = "it's Required to fill out ";
    }
    else{
        
        var checkSecondPassword = false;
        if(secondPass.length < 6){
            document.getElementById('secondPasswordSpam').innerHTML = "Your Password Length Should be Grater Than 6 Character's";
            checkSecondPassword = true;
        }
        
        if(secondPass.length > 20){
            document.getElementById('secondPasswordSpam').innerHTML = "Your Password length Should be Less Than 20 Character's";
            checkSecondPassword = true;
        }
   
            }
            if(first_Pass == secondPass){
        document.getElementById('secondPasswordSpam').innerHTML = "";
            }

            if(checkSecondPassword == false){
                document.getElementById('secondPasswordSpam').innerHTML = "";
            }
        }
    
        