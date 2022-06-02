import React from 'react'

export default function Contact() {
    return (
        <div>
            <hr className="my-20" />
            <div className="row">
                <div className="twelve columns">
                    <h2 class="h1-responsive font-weight-bold text-center">Contact Us</h2>
                    <hr />
                </div>
            </div>
            <section class="mb-4 my-5">
                <div class="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div class="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form">
                            <div class="row">
                                <div class="col-md-6" style={{ marginBottom: '25px' }}>
                                    <div class="md-form mb-0">
                                        <input type="text" id="name" name="name" class="form-control" placeholder="Your name" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="email" name="email" class="form-control" placeholder="Your email" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12" style={{ marginBottom: '25px' }}>
                                    <div class="md-form mb-0">
                                        <input type="text" id="subject" name="subject" class="form-control" placeholder="Subject" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12" style={{ marginBottom: '25px' }}>
                                    <div class="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" placeholder="Your message"></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div class="text-center text-md-left">
                            <a class="btn btn-primary">Send</a>
                        </div>
                        <div class="status"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}
