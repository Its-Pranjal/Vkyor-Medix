import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import '../Styles/Contact.css'
import vkyor from '../img/web.png'
import { Link } from 'react-router-dom'
const ContactPage = () => {
	const form = useRef();

	function sendEmail(e) {
		e.preventDefault();
		const form = e.target; // Assuming 'form' is the form element

		emailjs.sendForm('service_ycexs6v', 'template_r73xpaf', form, 'wzdw1pTBsO-9KQZWv')
			.then((result) => {
				console.log(result.text);
				alert('Your message was sent successfully!');
				form.reset(); // Clear input fields
			})
			.catch((error) => {
				console.log(error.text);
				alert('An error occurred while sending the message. Please try again.');
			});
	};


	return (
		<div>
			<div className="contact_us_green">
				<div className="responsive-container-block big-container">
					<div className="responsive-container-block container">
						<div
							className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line"
							id="i69b-2"
						>
							<form ref={form} className="form-box" onSubmit={sendEmail}>
								<div className="container-block form-wrapper">
									<div className="head-text-box">
										<p className="text-blk contactus-head">Contact us</p>
										<p className="text-blk contactus-subhead intro">

											𝑾𝒆'𝒓𝒆 𝒉𝒆𝒓𝒆 𝒕𝒐 𝒂𝒔𝒔𝒊𝒔𝒕 𝒚𝒐𝒖 𝒘𝒊𝒕𝒉 𝒂𝒏𝒚 𝒊𝒏𝒒𝒖𝒊𝒓𝒊𝒆𝒔 𝒐𝒓 𝒄𝒐𝒏𝒄𝒆𝒓𝒏𝒔 𝒚𝒐𝒖 𝒎𝒂𝒚 𝒉𝒂𝒗𝒆. <br />𝑭𝒆𝒆𝒍 𝒇𝒓𝒆𝒆 𝒕𝒐 𝒓𝒆𝒂𝒄𝒉 𝒐𝒖𝒕 𝒕𝒐 𝒖𝒔 𝒖𝒔𝒊𝒏𝒈 𝒕𝒉𝒆 𝒄𝒐𝒏𝒕𝒂𝒄𝒕 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒐𝒏 𝒑𝒓𝒐𝒗𝒊𝒅𝒆𝒅 𝒃𝒆𝒍𝒐𝒘. 𝑶𝒖𝒓 𝒅𝒆𝒅𝒊𝒄𝒂𝒕𝒆𝒅 𝒕𝒆𝒂𝒎 𝒂𝒕 𝑽𝑲𝒀𝑶𝑹 𝑴𝒆𝒅𝒊𝒙 𝒊𝒔 𝒄𝒐𝒎𝒎𝒊𝒕𝒕𝒆𝒅 𝒕𝒐 𝒑𝒓𝒐𝒗𝒊𝒅𝒊𝒏𝒈 𝒚𝒐𝒖 𝒘𝒊𝒕𝒉 𝒆𝒙𝒄𝒆𝒑𝒕𝒊𝒐𝒏𝒂𝒍 𝒔𝒖𝒑𝒑𝒐𝒓𝒕 𝒂𝒏𝒅 𝒔𝒆𝒓𝒗𝒊𝒄𝒆.

										</p>
									</div>
									<div className="responsive-container-block">
										<div
											className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6"
											id="i10mt-6"
										>
											<p className="text-blk input-title">FIRST NAME</p>
											<input className="input" id="ijowk-6" name="FirstName" />
										</div>
										<div
											className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12"
										>
											<p className="text-blk input-title">LAST NAME</p>
											<input className="input" id="indfi-4" name="Last Name" />
										</div>
										<div
											className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12"
										>
											<p className="text-blk input-title">EMAIL</p>
											<input className="input" type='email' id="ipmgh-6" name="Email" />
										</div>
										<div
											className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12"
										>
											<p className="text-blk input-title">PHONE NUMBER</p>
											<input className="input" type='tel' id="imgis-5" name="PhoneNumber" />
										</div>
										<div
											className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
											id="i634i-6"
										>
											<p className="text-blk input-title">WHAT DO YOU HAVE IN MIND</p>
											<textarea
												className="textinput"
												id="i5vyy-6"
												name='message'
												placeholder="Please enter query..."
											></textarea>
										</div>
									</div>
									<div className="btn-wrapper">
										<button className="submit-btn">Submit</button>
									</div>
								</div>
							</form>
						</div>
						<div
							className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-5 wk-ipadp-10"
							id="ifgi"
						>
							<div className="container-box">
								<div className="text-content">
									<p className="text-blk contactus-head">Contact us</p>
									<p className="text-blk contactus-subhead">
										𝑾𝒆'𝒓𝒆 𝒉𝒆𝒓𝒆 𝒕𝒐 𝒂𝒔𝒔𝒊𝒔𝒕 𝒚𝒐𝒖 𝒘𝒊𝒕𝒉 𝒂𝒏𝒚 𝒊𝒏𝒒𝒖𝒊𝒓𝒊𝒆𝒔 𝒐𝒓 𝒄𝒐𝒏𝒄𝒆𝒓𝒏𝒔 𝒚𝒐𝒖 𝒎𝒂𝒚 𝒉𝒂𝒗𝒆.<br /> 𝑭𝒆𝒆𝒍 𝒇𝒓𝒆𝒆 𝒕𝒐 𝒓𝒆𝒂𝒄𝒉 𝒐𝒖𝒕 𝒕𝒐 𝒖𝒔 𝒖𝒔𝒊𝒏𝒈 𝒕𝒉𝒆 𝒄𝒐𝒏𝒕𝒂𝒄𝒕 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒐𝒏 𝒑𝒓𝒐𝒗𝒊𝒅𝒆𝒅 𝒃𝒆𝒍𝒐𝒘. 𝑶𝒖𝒓 𝒅𝒆𝒅𝒊𝒄𝒂𝒕𝒆𝒅 𝒕𝒆𝒂𝒎 𝒂𝒕 𝑽𝑲𝒀𝑶𝑹 𝑴𝒆𝒅𝒊𝒙 𝒊𝒔 𝒄𝒐𝒎𝒎𝒊𝒕𝒕𝒆𝒅 𝒕𝒐 𝒑𝒓𝒐𝒗𝒊𝒅𝒊𝒏𝒈 𝒚𝒐𝒖 𝒘𝒊𝒕𝒉 𝒆𝒙𝒄𝒆𝒑𝒕𝒊𝒐𝒏𝒂𝒍 𝒔𝒖𝒑𝒑𝒐𝒓𝒕 𝒂𝒏𝒅 𝒔𝒆𝒓𝒗𝒊𝒄𝒆.
									</p>
								</div>
								<div className="workik-contact-bigbox">
									<div className="workik-contact-box">
										<div className="phone text-box">
											<img
												className="contact-svg"
												alt=''
												src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET21.jpg"
											/>
											<p className="contact-text">+91-988-988-77-33 (Mon-Sat 10am-6pm)</p>
										</div>
										<div className="address text-box">
											<img
												className="contact-svg"
												alt=''
												src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET22.jpg"
											/>
											<p className="contact-text">marketing@vkyor.in</p>
										</div>
										
										<div className="mail text-box">
											<img
												className="contact-svg"
												alt=''
												src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET23.jpg"
											/>
											<p className="contact-text">Shop No. 22-B 3rd Floor 1792, Old Hanuman Lane Kalbadevi, Mumbai-400002</p>
										</div>
										<div className="address text-box">
											<img
												className="contact-svg"
												alt=''
												src={vkyor}
											/>
											<p className="contact-text">  <Link to='https://www.vkyor.in'>https://www.vkyor.in</Link> </p>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactPage