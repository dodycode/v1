import * as React from "react";

import Layout from "@components/Layout";

import "@sass/pages/Work.scss";

import "@sass/pages/Contact.scss";

const ContactPage = () => {
    const [sendButtonText, setSendButtonText] = React.useState("Send Message");
    
    return (
        <Layout>
            <div className="work contact-wrapper">
                <div className="work__page-title-wrapper">
                    <h1 className="work__page-title-wrapper__title">Contact Me</h1>
                    <p className="txt-large">If you have something to talk about, please fill out the form below. Your message will be sent to my email and I will reply as soon as possible.</p>
                </div>

                <div className="form-wrapper">
                    <form className="form-wrapper__form" method="post" action="https://getform.io/f/360edaed-3f97-4dda-a136-4e58da1396ad" onSubmit={() => setSendButtonText("Sending...")}>
                        <div className="form-wrapper__form__row">
                            <div className="form-group">
                                <label htmlFor="nameInput">Name <span className="form-required">*</span></label>
                                <input id="nameInput" type="text" className="form-control" name="name" required={true} autoComplete="off"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="emailInput">Email <span className="form-required">*</span></label>
                                <input id="emailInput" type="email" className="form-control" name="email" required={true} autoComplete="off"></input>
                            </div>
                        </div>

                        <div className="form-wrapper__form__row">
                            <div className="form-group">
                                <label htmlFor="subjectInput">Subject <span className="form-required">*</span></label>
                                <input id="subjectInput" type="text" className="form-control" name="subject" required={true} autoComplete="off"></input>
                            </div>
                        </div>

                        <div className="form-wrapper__form__row">
                            <div className="form-group">
                                <label htmlFor="messageInput">Message <span className="form-required">*</span></label>
                                <textarea id="messageInput" className="form-control" name="message" required={true} autoComplete="off"></textarea>
                            </div>
                        </div>

                        <div className="form-wrapper__form__row">
                            <button className="btn">{ sendButtonText }</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default ContactPage
