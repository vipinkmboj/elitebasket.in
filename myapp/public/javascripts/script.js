// javascript for opening and closing side nav when iconbar is clicked, starts

function openNav() {
    var sideNav = document.getElementsByClassName('sidenav')[0];
    var iconBarButton = document.getElementsByClassName('iconbar')[0];
    var sidenavParent = document.querySelector('.sidenav-parent');
    sidenavParent.style.width = '100%';
    sideNav.style.width = '300px';
    iconBarButton.style.display = 'none';
}

//close sidenav when cross or outside window is clicked
var closeButton = document.getElementsByClassName('closeBtn')[0];
var sidenavParent = document.querySelector('.sidenav-parent');
var sideNav = document.getElementsByClassName('sidenav')[0];
var iconBarButton = document.getElementsByClassName('iconbar')[0];
closeButton.addEventListener('click', closeSideNav);
function closeSideNav() {
    sidenavParent.style.width = '0';
    sideNav.style.width = '0';
    iconBarButton.style.display = 'block';
}
// close sidenav + sidenav parent disply= none when anywhere outside window is clicked
var sidenavParent = document.querySelector('.sidenav-parent');
sidenavParent.addEventListener('click', closeSideNavforWindow);
function closeSideNavforWindow(e) {
    if(e.target.className == 'sidenav-parent') {
        sidenavParent.style.width = '0';
        sideNav.style.width = '0';
        iconBarButton.style.display = 'block';
    }
}
// javascript for opening and closing side nav when iconbar is clicked, ends

//Admin Pass modal javascript starts
//open Admin Pass modal
var parentModalAdminPass = document.getElementsByClassName('modal-parent-admin-pass')[0];
//var parentModalSignup = document.querySelector('.modal-parent-signup');
//var parentModalGiveYourDetails = document.querySelector('.modal-parent-giveyourdetails');
    
function openAdminPassModal() {
    parentModalAdminPass.style.display = 'block';
    //parentModalSignup.style.display = 'none';
    //parentModalContact.style.display = 'none';
//closing sidenav when signin is clicked
    sidenavParent.style.width = '0';
    sideNav.style.width = '0';
    iconBarButton.style.display = 'block';
    //closing give details sign up modal when signin is clicked
    //parentModalGiveYourDetails.style.display = 'none';
//scroll to top
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera


}
// close Admin Pass modal
var closeButtonModalAdminPass = document.getElementsByClassName('X-admin-pass')[0];
closeButtonModalAdminPass.addEventListener('click', closeAdminPassModal);
function closeAdminPassModal() {
    var parentModalAdminPass = document.getElementsByClassName('modal-parent-admin-pass')[0];
    parentModalAdminPass.style.display = 'none'; 
}
//close modal when clicked anywhere outside
var parentModalAdminPass = document.getElementsByClassName('modal-parent-admin-pass')[0];
parentModalAdminPass.addEventListener('click', closeAdminPassModalForWindow);
function closeAdminPassModalForWindow(e) {
    if(e.target.className == 'modal-parent-admin-pass') {
        parentModalAdminPass.style.display = 'none';

    }
}
//Admin Pass modal javascript ends

//Employee Pass modal javascript starts
//open Admin Pass modal
var parentModalEmployeePass = document.getElementsByClassName('modal-parent-employee-pass')[0];
//var parentModalSignup = document.querySelector('.modal-parent-signup');
//var parentModalGiveYourDetails = document.querySelector('.modal-parent-giveyourdetails');
    
function openEmployeePassModal() {
    parentModalEmployeePass.style.display = 'block';
    //parentModalSignup.style.display = 'none';
    //parentModalContact.style.display = 'none';
//closing sidenav when signin is clicked
    sidenavParent.style.width = '0';
    sideNav.style.width = '0';
    iconBarButton.style.display = 'block';
    //closing give details sign up modal when signin is clicked
    //parentModalGiveYourDetails.style.display = 'none';
//scroll to top
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera


}
// close Admin Pass modal
var closeButtonModalEmployeePass = document.getElementsByClassName('X-employee-pass')[0];
closeButtonModalEmployeePass.addEventListener('click', closeEmployeePassModal);
function closeEmployeePassModal() {
    var parentModalEmployeePass = document.getElementsByClassName('modal-parent-employee-pass')[0];
    parentModalEmployeePass.style.display = 'none'; 
}
//close modal when clicked anywhere outside
var parentModalEmployeePass = document.getElementsByClassName('modal-parent-employee-pass')[0];
parentModalEmployeePass.addEventListener('click', closeEmployeePassModalForWindow);
function closeEmployeePassModalForWindow(e) {
    if(e.target.className == 'modal-parent-employee-pass') {
        parentModalEmployeePass.style.display = 'none';

    }
}
//Employee Pass modal javascript ends

//Product Detail modal javascript starts

var parentModalProductDetail = document.getElementsByClassName('modal-parent-product-detail')[0];
//var parentModalSignup = document.querySelector('.modal-parent-signup');
//var parentModalGiveYourDetails = document.querySelector('.modal-parent-giveyourdetails');
    
function openProductDetailModal() {
    parentModalProductDetail.style.display = 'block';
    //parentModalSignup.style.display = 'none';
    //parentModalContact.style.display = 'none';
//closing sidenav when signin is clicked
    sidenavParent.style.width = '0';
    sideNav.style.width = '0';
    iconBarButton.style.display = 'block';
    //closing give details sign up modal when signin is clicked
    //parentModalGiveYourDetails.style.display = 'none';
//scroll to top
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera


}
// close Admin Pass modal
var closeButtonModalProductDetail = document.getElementsByClassName('X-product-detail')[0];
closeButtonModalProductDetail.addEventListener('click', closeEmployeePassModal);
function closeProductDetailModal() {
    var parentModalProductDetail = document.getElementsByClassName('modal-parent-product-detail')[0];
    parentModalProductDetail.style.display = 'none'; 
}
//close modal when clicked anywhere outside
var parentModalProductDetail = document.getElementsByClassName('modal-parent-product-detail')[0];
parentModalProductDetail.addEventListener('click', closeProductDetailModalForWindow);
function closeProductDetailModalForWindow(e) {
    if(e.target.className == 'modal-parent-product-detail') {
        parentModalProductDetail.style.display = 'none';

    }
}
//Product Detail modal javascript ends

//sign up modal javascript starts here
//open sign up modal when sign up button is clicked
var parentModalSignup = document.querySelector('.modal-parent-signup');
var parentModalSignin = document.getElementsByClassName('modal-parent-signin')[0];
function openSignUpModal() {
    parentModalSignup.style.display = 'block';
    parentModalSignin.style.display = 'none';
    parentModalContact.style.display = 'none';
//closing sidenav when signup is clicked
    sidenavParent.style.width = '0';
    sideNav.style.width = '0';
    iconBarButton.style.display = 'block';


    //scroll to top
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}

//close sign up modal when close or cancel button is clicked
var parentModalSignup = document.querySelector('.modal-parent-signup');
function closeSignupModal() {
    parentModalSignup.style.display = 'none';
}

//close sign up modal when outside modal is clicked
var parentModalSignup = document.querySelector('.modal-parent-signup');
parentModalSignup.addEventListener('click', closeSignupModadforWindow);
function closeSignupModadforWindow(e) {
    if(e.target.className == 'modal-parent-signup') {
        parentModalSignup.style.display = 'none';
    }
}
//sign up modal javascript ends here

//sign up Admin modal javascript starts here
//open sign up Admin modal when sign up button is clicked
var parentModalSignupAdmin = document.querySelector('.modal-parent-signup-admin');
var parentModalSignup = document.querySelector('.modal-parent-signup');
var parentModalSignin = document.getElementsByClassName('modal-parent-signin')[0];
var parentModalContact = document.querySelector('.modal-parent-contact');

function openSignUpAdminModal() {
    parentModalSignupAdmin.style.display = 'block';
    parentModalSignup.style.display = 'none';
    parentModalSignin.style.display = 'none';
    parentModalContact.style.display = 'none';
//closing sidenav when signup Admin is clicked
    sidenavParent.style.width = '0';
    sideNav.style.width = '0';
    iconBarButton.style.display = 'block';

    

    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera


}

//close sign up Admin modal when close or cancel button is clicked
var parentModalSignupAdmin = document.querySelector('.modal-parent-signup-admin');
//var parentModalSignup = document.querySelector('.modal-parent-signup');
function closeSignupAdminModal() {
    parentModalSignupAdmin.style.display = 'none';
}

//close sign up Admin modal when outside modal is clicked
var parentModalSignupAdmin = document.querySelector('.modal-parent-signup-admin');
//var parentModalSignup = document.querySelector('.modal-parent-signup');
parentModalSignupAdmin.addEventListener('click', closeSignupAdminModalforWindow);
function closeSignupAdminModalforWindow(e) {
    if(e.target.className == 'modal-parent-signup-admin') {
        parentModalSignupAdmin.style.display = 'none';
    }
}
//sign up Admin modal javascript ends here

//Give Your Details modal javascript starts here
 function openGiveYourDetailsModal() {
    var parentModalGiveYourDetails = document.querySelector('.modal-parent-giveyourdetails');

    parentModalGiveYourDetails.style.display = 'block';

 }

 function closeGiveYourDetailsModal() {
    var parentModalGiveYourDetails = document.querySelector('.modal-parent-giveyourdetails');

    parentModalGiveYourDetails.style.display = 'none';

 }
//close give your details modal on window click .. this one is not working
/*
 var parentModalGiveYourDetails = document.querySelector('.modal-parent-giveyourdetails');
 parentModalGiveYourDetails.addEventListener('click', closeGiveYourDetailsModadforWindow);
function closeGiveYourDetailsModadforWindow(e) {
    if(e.target.className == '.modal-parent-giveyourdetails') {
        parentModalGiveYourDetails.style.display = 'none';
    }
}
*/
//Give Your Details modal javascript ends here
//Website Features List Modal javascript starts here
/*
function openWebsiteFeaturesListModal() {
    var parentModalWebsiteFeaturesList = document.querySelector('.modal-parent-websitefeatureslist');

    parentModalWebsiteFeaturesList.style.display = 'block';

 }

 function closeWebsiteFeaturesListModal() {
    var parentModalWebsiteFeaturesList = document.querySelector('.modal-parent-websitefeatureslist');

    parentModalWebsiteFeaturesList.style.display = 'none';

 }
 
//View Website Features list starts here
function openViewWebsiteFeaturesListModal() {
    var parentModalViewWebsiteFeaturesList = document.querySelector('.modal-parent-viewwebsitefeatureslist');

    parentModalViewWebsiteFeaturesList.style.display = 'block';

 }

 function closeViewWebsiteFeaturesListModal() {
    var parentModalViewWebsiteFeaturesList = document.querySelector('.modal-parent-viewwebsitefeatureslist');

    parentModalViewWebsiteFeaturesList.style.display = 'none';

 }
//View Website Features list ends here
//Website Content Modal javascript starts here
function openWebsiteContentModal() {
    var parentModalWebsiteContent = document.querySelector('.modal-parent-website-content');

    parentModalWebsiteContent.style.display = 'block';

 }

 function closeWebsiteContentModal() {
    var parentModalWebsiteContent = document.querySelector('.modal-parent-website-content');

    parentModalWebsiteContent.style.display = 'none';

 }

//Website Content modal javascript ends here
//View Website Content list starts here
function openViewWebsiteContentModal() {
    var parentModalViewWebsiteContent = document.querySelector('.modal-parent-viewwebsitecontent');

    parentModalViewWebsiteContent.style.display = 'block';

 }

 function closeViewWebsiteContentModal() {
    var parentModalViewWebsiteContent = document.querySelector('.modal-parent-viewwebsitecontent');

    parentModalViewWebsiteContent.style.display = 'none';

 }
 */
//View Website Content list ends here

//Agreement Modal javascript starts here
function openAgreementModal() {
    var parentModalAgreement = document.querySelector('.modal-parent-agreement');

    parentModalAgreement.style.display = 'block';

 }

 function closeAgreementModal() {
    var parentModalAgreement = document.querySelector('.modal-parent-agreement');

    parentModalAgreement.style.display = 'none';

 }

//Agreement modal javascript ends here

// contact modal javascript starts here
//open contact modal when Contact button is clicked
function openContactModal() {
    var parentModalContact = document.querySelector('.modal-parent-contact');
    parentModalContact.style.display = 'block';
    parentModalSignin.style.display = 'none';
    parentModalSignup.style.display = 'none';
    //closing sidenav when contact is clicked
    sidenavParent.style.width = '0';
    sideNav.style.width = '0';
    iconBarButton.style.display = 'block';
    //Scroll to top
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}

//close contat modal when Cross or Cancel button is clicked
function closeContactModal() {
    var parentModalContact = document.querySelector('.modal-parent-contact');
    parentModalContact.style.display = 'none';
}
//close contat modal when outside window is clicked
var parentModalContact = document.querySelector('.modal-parent-contact');
parentModalContact.addEventListener('click', closeContactModalforWindow);

function closeContactModalforWindow(e) {
    if(e.target.className == 'modal-parent-contact') {
        parentModalContact.style.display = 'none';  
    }
}
// contact modal javascript ends here

//open post freelance job modal when Contact button is clicked
function openPostFreelanceJobModal() {
    var parentModalPostFreelanceJob = document.querySelector('.modal-parent-postfreelancejob');
    
    parentModalPostFreelanceJob.style.display = 'block';
    parentModalSignin.style.display = 'none';
    parentModalSignup.style.display = 'none';
    parentModalContact.style.display = 'none';
    //closing sidenav when contact is clicked
    sidenavParent.style.width = '0';
    sideNav.style.width = '0';
    iconBarButton.style.display = 'block';
    //Scroll to top
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}

//close contat modal when Cross or Cancel button is clicked
function closePostFreelanceJobModal() {
    var parentModalPostFreelanceJob = document.querySelector('.modal-parent-postfreelancejob');
    parentModalPostFreelanceJob.style.display = 'none';
}
//close contat modal when outside window is clicked
var parentModalPostFreelanceJob = document.querySelector('.modal-parent-postfreelancejob');
parentModalPostFreelanceJob.addEventListener('click', closePostFreelanceJobModalforWindow);

function closePostFreelanceJobModalforWindow(e) {
    if(e.target.className == 'modal-parent-postfreelancejob') {
        parentModalPostFreelanceJob.style.display = 'none';  
    }
}
// post freelance job modal javascript ends here

// Upload Profile Image modal javascript starts here
//open Upload Profile Image modal when Contact button is clicked
function openUloadProfileImageModal() {
    var parentModalUploadProfileImage = document.querySelector('.modal-parent-upload-profile-image');
    var parentModalContact = document.querySelector('.modal-parent-contact');
    
    parentModalUploadProfileImage.style.display = 'block';
    parentModalSignin.style.display = 'none';
    parentModalSignup.style.display = 'none';
    parentModalContact.style.display = 'none';
    //closing sidenav when contact is clicked
    sidenavParent.style.width = '0';
    sideNav.style.width = '0';
    iconBarButton.style.display = 'block';
    //Scroll to top
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}

//close contat modal when Cross or Cancel button is clicked
function closeUloadProfileImageModal() {
    var parentModalUploadProfileImage = document.querySelector('.modal-parent-upload-profile-image');
    parentModalUploadProfileImage.style.display = 'none';
}
//close contat modal when outside window is clicked
var parentModalUploadProfileImage = document.querySelector('.modal-parent-upload-profile-image');
parentModalUploadProfileImage.addEventListener('click', closeUploadProfileImageModalforWindow);

function closeUploadProfileImageModalforWindow(e) {
    if(e.target.className == 'modal-parent-contact') {
        parentModalUploadProfileImage.style.display = 'none';  
    }
}
// Upload Profile Image modal javascript ends here

// confirm before deleting modal javascript starts here
// Remove Item when remove tag is clicked
//delete customer account javascript strts here
/*
    var deleteCustomerAccountAnchor = document.getElementById('delete-customer-account-anchor');
    deleteCustomerAccountAnchor.addEventListener('click', deleteCustomerAccountAnchorClicked);

    function deleteCustomerAccountAnchorClicked() {
        var deleteForm = document.getElementById('delete-form');
        var deleteFormAttribute = `/deletecustomeraccount/:id`
        deleteForm.setAttribute('action', deleteFormAttribute);

        openConfirmBeforeDeleteModalForCustomerAccount()
    }
*/
    function openConfirmBeforeDeleteModalForCustomerAccount() {
        var deleteForm = document.getElementById('delete-form');
        var deleteFormAttribute = `/deletecustomeraccount`;
        deleteForm.setAttribute('action', deleteFormAttribute);

        var parentModalConfirmBeforeDelete = document.querySelector('.modal-parent-confirmation-before-delete');
        parentModalConfirmBeforeDelete.style.display = 'block';
        parentModalSignin.style.display = 'none';
        parentModalSignup.style.display = 'none';
        //closing sidenav when contact is clicked
        sidenavParent.style.width = '0';
        sideNav.style.width = '0';
        iconBarButton.style.display = 'block';
        //Scroll to top
        document.body.scrollTop = 0; //For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    
    }
// delete customer account javascript ends here
//open confirm before delete modal when button is clicked
/*
function openConfirmBeforeDeleteModal() {
    var parentModalConfirmBeforeDelete = document.querySelector('.modal-parent-confirmation-before-delete');
    parentModalConfirmBeforeDelete.style.display = 'block';
    parentModalSignin.style.display = 'none';
    parentModalSignup.style.display = 'none';
    //closing sidenav when contact is clicked
    sidenavParent.style.width = '0';
    sideNav.style.width = '0';
    iconBarButton.style.display = 'block';
    //Scroll to top
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}
*/
//close confirm before delete modal when Cross or Cancel button is clicked
function closeConfirmBeforeDeleteModal() {
    var parentModalConfirmBeforeDelete = document.querySelector('.modal-parent-confirmation-before-delete');
    parentModalConfirmBeforeDelete.style.display = 'none';
}
//close confirmbefore delete modal when outside window is clicked
var parentModalContact = document.querySelector('.modal-parent-contact');
parentModalContact.addEventListener('click', closeContactModalforWindow);

function closeContactModalforWindow(e) {
    if(e.target.className == 'modal-parent-confirmation-before-delete') {
        parentModalContact.style.display = 'none';  
    }
}
// confirm before deliting modal javascript ends here

//footer javascript 
//tap here to go to top javascript
//var tapToTopButton = document.querySelector('#taptotopButton');
//tapToTopButton.addEventListener('click', goToTop);

function goToTop() {
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Open Send Message modal 

function openSendMessageModal() {
    var sendMessageParentModal = document.querySelector('.modal-parent-send-message');
    sendMessageParentModal.style.display = 'block';
}

//Close Send Message modal on close button or cancel button click
function closeSendMessageModal() {
    var sendMessageParentModal = document.querySelector('.modal-parent-send-message');
    sendMessageParentModal.style.display = 'none';
}

//Close Send Message modal on outside window click
/*
var sendMessageParentModal = document.querySelector('.modal-parent-send-message')[0];
sendMessageParentModal.addEventListener('click', closeSendMessageModalForWindow);
function closeSendMessageModalForWindow(e) {
    if(e.target.className == 'modal-parent-send-message') {
        sendMessageParentModal.style.display = 'none';
    }
}
*/
// Open openModalStaffEditForm() 

 function openModalStaffEditForm(){
    var parentModalStaffEditForm = document.querySelector('.modal-parent-staff-edit-form');
    parentModalStaffEditForm.style.display = 'block';
 }


 // close Admin staff edit form when cancel or cross btn is clicked
 function closeModalStaffEditForm() {
    var parentModalStaffEditForm = document.querySelector('.modal-parent-staff-edit-form');
    parentModalStaffEditForm.style.display = 'none';
 }

 // close Admin staff edit form when outsidewindow is clicked
 var parentModalStaffEditForm = document.querySelector('.modal-parent-staff-edit-form');
 parentModalStaffEditForm.addEventListener('click', closeStaffEditFormModalForWindow);
  function closeStaffEditFormModalForWindow(e) {
    if (e.target.className == 'modal-parent-staff-edit-form') {
        parentModalStaffEditForm.style.display = "none";
        
    }
 }


 function showThisIdDetail() {
     document.getElementById('vip').innerHTML = 'Vipin Kamboj Kumar'
 }

 //Open  openParticularDashboard()
/* work on this when logged in as .... is clicked, then dashboard belonged to that particular id should open for eg. if admin is logged in then dashboardadmin should open, if admin staff is logged in, then dashboardadminstaff should open, in case
of employee logged in, dashboardemployee should open. when client is logged in then dashboardclient should open.
 function openParticularDashboard() { vhyj
     var admin = document.
 }

 */


 //Write a note
 /*
 var noteTitle = document.getElementById('note-title');
 var writeNoteTextArea = document.getElementById('write-note-text-area');
 var saveNoteBtn = document.getElementById('save-note-btn');
 var isOutput = document.getElementById('IsOutput');

 saveNoteBtn.onclick = function() {
     var noteKey = noteTitle.value;
     var noteValue =  writeNoteTextArea.value;

     if(noteKey && noteValue) {
        localStorage.setItem(noteKey, noteValue);
        location.reload();
     }
 }
 for(let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    isOutput.innerHTML += `${key}: ${value} <br/>`;
 }
*/

//viewmodal.ejs javascript strt here
/*
var itemPriceElements = document.getElementsByClassName('this-item-price-element');
var itemPrice;
for(i = 0; i < itemPriceElements.length; i++) {
    var itemPriceElement = itemPriceElements[i]
    var itemPrice = parseFloat(itemPriceElement.nodeValue) ;
    var totalPrice = itemPrice + itemPrice;

    
}
*/



//viewmodal.ejs javascript ends heref

//Wedding Invitation template demo javascript starts here
// Open modal RSVP

var modalParentRsvp = document.querySelector('.modal-parent-rsvp');
function openModalRsvp() {
    
       modalParentRsvp.style.display = 'block';
    
    
}
// close modal RSVP

var modalParentRsvp = document.querySelector('.modal-parent-rsvp');
modalParentRsvp.addEventListener('click', closeModal);

function closeModal(event) {
if(event.target.className = '.modal-parent-rsvp') {
    modalParentRsvp.style.display = 'none';
}
}

function closeModalRsvp() {
    var modalParentRsvp = document.querySelector('.modal-parent-rsvp');
    modalParentRsvp.style.display = 'none';
}
//Wedding Invitation template demo javascript ends here

// Freelance Work Advertisement Modal javascript starts here
//open freelance Work Advertisement Modal
/*
function openFreelanceWorkAdvertisementModal() {
    var modalParentFreelanceWork = document.getElementsByClassName('modal-parent-freelancework-advertisement')[0];
    modalParentFreelanceWork.style.display = 'block';
}
//close freelance Work Advertisement Modal
function closeFreelanceWorkAdvertisementModal() {
    var modalParentFreelanceWork = document.getElementsByClassName('modal-parent-freelancework-advertisement')[0];
    modalParentFreelanceWork.style.display = 'none';
}

//close freelance Work Advertisement Modal when outside window is clicked
/* not working
var modalParentFreelanceWork = document.getElementsByClassName('modal-parent-freelancework-advertisement')[0];
modalParentFreelanceWork.addEventListener('click', closeFreelanceWorkAdvertisementModalForWindow);
 function closeFreelanceWorkAdvertisementModalForWindow(event) {
    if(event.target.className == 'modal-parent-freelancework-advertisement')
    modalParentFreelanceWork.style.display = 'none';
}
*/
// Freelance Work Advertisement Modal javascript ends here
// Chat box modal javascript starts here
/*
function openChatBoxModal() {
    var modalParentChatbox = document.getElementsByClassName('modal-parent-chatbox')[0]; 

    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    modalParentChatbox.style.display = 'block';
}

function closeChatBoxModal() {
    var modalParentChatbox = document.getElementsByClassName('modal-parent-chatbox')[0]; 

    modalParentChatbox.style.display = 'none';
}


*/
// Chat box modal javascript ends here
//dashboard get started javascript here
// Show and hide Home Page content form in dashboardgetstarted
 function showHideHomePageContentForm() {
    var homePageCheckBox = document.getElementById('hompage-checkbox');
    var homePageContentLabel = document.getElementById('home-page-content-label');
    var homePageContentTextArea = document.getElementById('home-page-content-textarea');
    if(homePageCheckBox.checked == true) {
        homePageContentLabel.style.display = 'block';
        homePageContentTextArea.style.display = 'block';
    } else {
        homePageContentLabel.style.display = 'none';
        homePageContentTextArea.style.display = 'none';
 
    }
 }
 // Show Hide About content form in dashboardgetstarted
 function showHideAboutContentForm() {
    var aboutCheckBox = document.getElementById('about-checkbox');
    var aboutContentLabel = document.getElementById('about-content-label');
    var aboutContentTextArea = document.getElementById('about-content-textarea');
    if(aboutCheckBox.checked == true) {
        aboutContentLabel.style.display = 'block';
        aboutContentTextArea.style.display = 'block';
    } else {
        aboutContentLabel.style.display = 'none';
        aboutContentTextArea.style.display = 'none';
 
    }
 }
 // Show Hide About content form in dashboardgetstarted
 function showHideServicesContentForm() {
    var servicesCheckBox = document.getElementById('services-checkbox');
    var servicesContentLabel = document.getElementById('services-content-label');
    var servicesContentTextArea = document.getElementById('services-content-textarea');
    if(servicesCheckBox.checked == true) {
        servicesContentLabel.style.display = 'block';
        servicesContentTextArea.style.display = 'block';
    } else {
        servicesContentLabel.style.display = 'none';
        servicesContentTextArea.style.display = 'none';
 
    }
 }
 // Show Hide Why Us content form in dashboardgetstarted
 function showHideWhyUsContentForm() {
    var whyUsCheckBox = document.getElementById('why-us-checkbox');
    var whyUsContentLabel = document.getElementById('why-us-content-label');
    var whyUsContentTextArea = document.getElementById('why-us-content-textarea');
    if(whyUsCheckBox.checked == true) {
        whyUsContentLabel.style.display = 'block';
        whyUsContentTextArea.style.display = 'block';
    } else {
        whyUsContentLabel.style.display = 'none';
        whyUsContentTextArea.style.display = 'none';
 
    }
 }
 // Show Hide Social Media content form in dashboardgetstarted
 function showHideSocialMediaContentForm() {
    var socialMediaCheckBox = document.getElementById('social-media-checkbox');
    var socialMediaContentLabel = document.getElementById('social-media-content-label');
    var socialMediaContentTextArea = document.getElementById('social-media-content-textarea');
    if(socialMediaCheckBox.checked == true) {
        socialMediaContentLabel.style.display = 'block';
        socialMediaContentTextArea.style.display = 'block';
    } else {
        socialMediaContentLabel.style.display = 'none';
        socialMediaContentTextArea.style.display = 'none';
 
    }
 }
 // Show Hide Policy content form in dashboardgetstarted
 function showHidePolicyContentForm() {
    var policyCheckBox = document.getElementById('policy-checkbox');
    var policyContentLabel = document.getElementById('policy-content-label');
    var policyContentTextArea = document.getElementById('policy-content-textarea');
    if(policyCheckBox.checked == true) {
        policyContentLabel.style.display = 'block';
        policyContentTextArea.style.display = 'block';
    } else {
        policyContentLabel.style.display = 'none';
        policyContentTextArea.style.display = 'none';
 
    }
 }
 // Show Hide Terms and Conditions content form in dashboardgetstarted
 function showHideTermsAndConditionsContentForm() {
    var termsAndConditionsCheckBox = document.getElementById('terms-and-conditions-checkbox');
    var termsAndConditionsContentLabel = document.getElementById('terms-and-conditions-content-label');
    var termsAndConditionsContentTextArea = document.getElementById('terms-and-conditions-content-textarea');
    if(termsAndConditionsCheckBox.checked == true) {
        termsAndConditionsContentLabel.style.display = 'block';
        termsAndConditionsContentTextArea.style.display = 'block';
    } else {
        termsAndConditionsContentLabel.style.display = 'none';
        termsAndConditionsContentTextArea.style.display = 'none';
 
    }
 }
 // Show Hide Copy Right content form in dashboardgetstarted
 function showHideCopyRightContentForm() {
    var copyRightCheckBox = document.getElementById('copy-right-checkbox');
    var copyRightContentLabel = document.getElementById('copy-right-content-label');
    var copyRightContentTextArea = document.getElementById('copy-right-content-textarea');
    if(copyRightCheckBox.checked == true) {
        copyRightContentLabel.style.display = 'block';
        copyRightContentTextArea.style.display = 'block';
    } else {
        copyRightContentLabel.style.display = 'none';
        copyRightContentTextArea.style.display = 'none';
 
    }
 }
// Show Hide Photo gallery content form in dashboardgetstarted
function showHidePhotoGalleryContentForm() {
    var photoGalleryCheckBox = document.getElementById('photo-gallery-checkbox');
    var photoGalleryContentLabel = document.getElementById('photo-gallery-content-label');
    var photoGalleryContentTextArea = document.getElementById('photo-gallery-content-textarea');
    var photoGalleryUploadContentLabel = document.getElementById('photo-gallery-upload-content-label');
    var photoGalleryUploadContentInput = document.getElementById('photo-gallery-upload-content-input');

    if(photoGalleryCheckBox.checked == true) {
        photoGalleryContentLabel.style.display = 'block';
        photoGalleryContentTextArea.style.display = 'block';
        photoGalleryUploadContentLabel.style.display = 'block';
        photoGalleryUploadContentInput.style.display = 'block';
        //set required attribute
        photoGalleryUploadContentInput.setAttribute('required', 'required');
    } else {
        photoGalleryContentLabel.style.display = 'none';
        photoGalleryContentTextArea.style.display = 'none';
        photoGalleryUploadContentLabel.style.display = 'none';
        photoGalleryUploadContentInput.style.display = 'none';
        //remove required attribute        
        photoGalleryUploadContentInput.required = false;
        


    }
 }

 // Show Hide Templates Feature content form in dashboardgetstarted
function showHideTemplatesFeatureContentForm() {
    var templatesFeatureCheckBox = document.getElementById('templates-feature-checkbox');
    var templatesFeatureContentLabel = document.getElementById('templates-feature-content-label');
    var templatesFeatureContentTextArea = document.getElementById('templates-feature-content-textarea');
    var templatesFeatureUploadContentLabel = document.getElementById('templates-feature-upload-content-label');
    var templatesFeatureUploadContentInput = document.getElementById('templates-feature-upload-content-input');

    if(templatesFeatureCheckBox.checked == true) {
        templatesFeatureContentLabel.style.display = 'block';
        templatesFeatureContentTextArea.style.display = 'block';
        templatesFeatureUploadContentLabel.style.display = 'block';
        templatesFeatureUploadContentInput.style.display = 'block';
        //Set required attribute
        templatesFeatureUploadContentInput.setAttribute('required', 'required');

    } else {
        templatesFeatureContentLabel.style.display = 'none';
        templatesFeatureContentTextArea.style.display = 'none';
        templatesFeatureUploadContentLabel.style.display = 'none';
        templatesFeatureUploadContentInput.style.display = 'none';

        //Remove required attribute
        templatesFeatureUploadContentInput.required = false;


    }
 }


 // Show Hide Menu content form in dashboardgetstarted
function showHideMenuContentForm() {
    var menuCheckBox = document.getElementById('menu-checkbox');
    var menuContentLabel = document.getElementById('menu-content-label');
    var menuContentTextArea = document.getElementById('menu-content-textarea');
    var menuOrLabel = document.getElementById('menu-or-label');
    var menuUploadContentLabel = document.getElementById('menu-upload-content-label');
    var menuUploadContentInput = document.getElementById('menu-upload-content-input');

    if(menuCheckBox.checked == true) {
        menuContentLabel.style.display = 'block';
        menuContentTextArea.style.display = 'block';
        menuOrLabel.style.display = 'block';
        menuUploadContentLabel.style.display = 'block';
        menuUploadContentInput.style.display = 'block';
    } else {
        menuContentLabel.style.display = 'none';
        menuContentTextArea.style.display = 'none';
        menuOrLabel.style.display = 'none';
        menuUploadContentLabel.style.display = 'none';
        menuUploadContentInput.style.display = 'none';


    }
 }

// Show Hide payment method content (bank acc and ifsc) content form in dashboardgetstarted
function showHidePaymentMethodContentForm() {
    var paymentMethodCheckBox = document.getElementById('payment-method-checkbox');
    var paymentMethodContentLabel = document.getElementById('payment-method-content-label');
    var paymentMethodContentTextArea = document.getElementById('payment-method-content-textarea');
    if(paymentMethodCheckBox.checked == true) {
        paymentMethodContentLabel.style.display = 'block';
        paymentMethodContentTextArea.style.display = 'block';
    } else {
        paymentMethodContentLabel.style.display = 'none';
        paymentMethodContentTextArea.style.display = 'none';
 
    }
 }
// Show Logo File Upload Input when "I have my on logo" is clicked.
function showLogoFileUploadInput() {
    document.getElementsByClassName('logo-file-upload-label')[0].style.display = 'block';
    document.getElementsByClassName('logo-file-upload-input')[0].style.display = 'block';
    //Set required attribute
    document.getElementsByClassName('logo-file-upload-input')[0].setAttribute('required', 'required');
    //document.getElementsByClassName('logo-file-upload-input')[0].
}
// hide logo file upload input if "I want to buy logo" is clicked.
function hideLogoFileUploadInput() {
    document.getElementsByClassName('logo-file-upload-label')[0].style.display = 'none';
    document.getElementsByClassName('logo-file-upload-input')[0].style.display = 'none';
    // Remove required attribute
    document.getElementsByClassName('logo-file-upload-input')[0].required = false;

}
// show backgroundcolor input and hide backgroundImage input if "I Want Back Ground color in My Website is selected" dashboardgetstarted.js

function showBackgroundColorInput() {
    //backgroundColorInput.style.display = 'block';
    document.getElementsByClassName('background-color-select-input')[0].style.display= 'inline';
    document.getElementsByClassName('background-color-select-input')[1].style.display= 'inline';
    document.getElementsByClassName('background-image-select-label')[0].style.display= 'none';
    document.getElementsByClassName('background-image-select-input')[0].style.display= 'none';
    // remove required attribute
    document.getElementsByClassName('background-image-select-input')[0].required = false;

}

// show backgroundcolor input if "I Want Back Ground color in My Website is selected" dashboardgetstarted.js

function showBackgroundImageInput() {
    // hide background color input first
    document.getElementsByClassName('background-color-select-input')[0].style.display= 'none';
    document.getElementsByClassName('background-color-select-input')[1].style.display= 'none';
    document.getElementsByClassName('background-image-select-label')[0].style.display= 'inline';
    document.getElementsByClassName('background-image-select-input')[0].style.display= 'inline';

    // Set required attribute 
    document.getElementsByClassName('background-image-select-input')[0].setAttribute('required', 'required');

}

//

/*
if(document.readyState == 'loading')  {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    var removeButtonsForCartItems = document.getElementsByClassName('btn-danger');
for(var i = 0; i < removeButtonsForCartItems.length; i++) {
    var removeButtonForCurrentCartItem = removeButtonsForCartItems[i];
    removeButtonForCurrentCartItem.addEventListener('click', removeCartItem}

}

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
});

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for(var i = 0; i < cartRows.length; i++) {
        var currentCartRow = cartRows[i];
        var currentCartRowPriceElement = currentCartRow.getElementsByClassName('cart-price')[0];
        var currentCartRowQuantityElement = currentCartRow.getElementsByClassName('cart-quantity-input')[0]
        var currentCartRowQuantityValue = currentCartRowQuantityElement.value;
        var currentCartRowPrice = parseFloat(currentCartRowPriceElement.innerText.replace('$', ''));
        
        total = total + (currentCartRowQuantityValue*currentCartRowPrice)
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}
*/

// Show Password javascript
function showPassword() {
    var passwordInput = document.getElementById('password-input');
    if(passwordInput.type === 'password') {
        passwordInput.type = 'text'
    } else {
        passwordInput.type = 'password'
    } 
}

// Select pizza restaurant template
/*
                    function selectPizzaRestaurantTemplate() {                    
                window.open('/dashboardgetstarted/#pizza-restaurant-template')
                
               
            }
                
            */
                
            
// chat box modal javascript starts here
//open chat box modal when Contact button is clicked
function openChatBoxModal() {
    var parentModalChatBox = document.querySelector('.modal-parent-chatbox');
    parentModalChatBox.style.display = 'block';
    parentModalContact.style.display = 'none';
    parentModalSignin.style.display = 'none';
    parentModalSignup.style.display = 'none';
    //closing sidenav when contact is clicked
    sidenavParent.style.width = '0';
    sideNav.style.width = '0';
    iconBarButton.style.display = 'block';
    //Scroll to top
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}

//close chat box modal when Cross or Cancel button is clicked
function closeChatBoxModal() {
    var parentModalChatBox = document.querySelector('.modal-parent-chatbox');
    parentModalChatBox.style.display = 'none';
}
//close chat box modal when outside window is clicked
var parentModalChatBox = document.querySelector('.modal-parent-chatbox');
parentModalChatBox.addEventListener('click', closeChatBoxModalforWindow);

function closeChatBoxModalforWindow(e) {
    if(e.target.className == 'modal-parent-chatbox') {
        parentModalChatBox.style.display = 'none';  
    }
}
// chat Box modal javascript ends here

//slide container
/*
const slider = document.querySelector('.slider-container'),
    slides = Array.from(document.querySelectorAll('.slide')) 

let isDragging = false,
  startPos = 0,
  currentTranslate = 0,  
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0

slides.forEach((slide, index) => {
    const slideImage = slide.querySelectorAll('img')
    slideImage.addEventListener('dragstart', (e) =>e.preventDefault())

    //Touch Events

    slide.addEventListener('touchstart', touchStart(index))
    slide.addEventListener('touchend', touchEnd)
    slide.addEventListener('touchmove', touchMove)

    //Mouse Events
    slide.addEventListener('mousedown', touchStart(index))
    slide.addEventListener('mouseup', touchEnd)
    slide.addEventListener('mouseleave', touchEnd)
    slide.addEventListener('mousemove', touchMove)
})

function touchStart(index) {
    return function(event) {
        console.log('start');
    }
}

function touchEnd() {
    console.log('end');
}

function touchMove() {
    console.log('move');
}
*/
