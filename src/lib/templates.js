export function template_emailVerification(fname, link) {
  const template = `
  <div style="width:94%;margin:auto;padding:10px;font-size:14.5px;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <div style="text-align: center;padding: 15px 15px; background-color: #198754; margin-bottom: 15px;">
        <img src="https://res.cloudinary.com/dwlnwmaid/image/upload/v1717858839/samples/pathsychLogo_wj5flq.png" alt="Company Logo" style="max-width: 200px; height: auto;">
      </div>  
  <div>Hello <strong>"${fname}"</strong>,</div>
    <div style="margin-top: 12px;">Thank you for registering with <b><i>Pathsynch</i></b>. To complete your registration and activate your account, please verify your email address by clicking the button below:</div>
    <div style="display: flex; justify-content: center; padding: 20px 0px;">
         <a style="color:black;text-decoration:none; background-color: yellow; padding: 12px 30px; border-radius: 10px;" href="${link}">Click to Verify</a>
    </div>
    <p>If you did not create an account with us, please disregard this email.</p>
    <p><b>Pathsynch</b></p>
   </div>
  `;
  return template;
}
// email verification template_

export function template_emailVerification_fp(fname, link) {
  const template = `
    <div style="width:94%;margin:auto;padding:10px;font-size:14.5px;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <div>Hello <strong>${fname}</strong>,</div>
    <div>Your pathsynch reset password link is <a  style="color:dodgerblue;text-decoration:none;" href="${link}">${link}</a>.</div>
    <p>Do not disclose with anyone.</p>
   </div>
  `;
  return template;
}
// email verification template_ forgotten password
