import React, { useRef } from 'react'
import "./Email.css"
import { CopyToClipboard } from 'react-copy-to-clipboard'
const Email = () => {

  const form = useRef();
  const CopyEmail = (e) => {
    e.preventDefault();
  }
  const sendEmail = (e) => {
    e.prevent.Default("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "YOUR_USER_ID")
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.lof(error.text);
      });
  };

  return (
    <div className="Email" id="email">
      <div className="left-j">
        <hr />
        <div>
          <span >For Projects</span>

        </div>
        <div>
          <span>And Opportunities</span>

        </div>
      </div>
      {/* Right side */}
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <span className="email">Email</span>
          <CopyToClipboard text="abhishek@coral.iitkgp.ac.in">
            <button className=" btn btn-email email-address" onClick={(e) => CopyEmail(e)}>abhishek@coral.iitkgp.ac.in</button>
          </CopyToClipboard>
        </form>

      </div>
    </div>
  )
}

export default Email
