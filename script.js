document.addEventListener("DOMContentLoaded", function () {
  // Contact Form Submission Handler
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for reaching out to Radio Services. Our team will contact you shortly.");
      contactForm.reset();
    });
  }

  // MSME Certificate Download Handler
  const msmeBtn = document.getElementById("downloadMsmeBtn");
  if (msmeBtn) {
    msmeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      
      const certificateContent = `
=====================================================
    GOVERNMENT OF INDIA - MSME REGISTRATION PROOF
=====================================================
Enterprise Name : RADIO SERVICES
Entity Type     : Micro & Small Enterprise (Sole Proprietorship)
Proprietor Name : Adarsh Anand
Official Phone  : +1 (406) 747-4507
Business Type   : Independent Audio Broadcasting & Sound Setup
Registration Status: Verified & Registered
=====================================================
`;
      const blob = new Blob([certificateContent], { type: "text/plain" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Radio_Services_MSME_Certificate.txt";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
  }
});