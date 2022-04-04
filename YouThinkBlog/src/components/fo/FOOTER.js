import { useRef, useState } from "react"
import { Link } from "react-router-dom"

function Footer() {
    let emailAD = useRef()
    let [loading, setLoading] = useState(false)
    let [subscriptionResponse, setSubscriptionResponse] = useState({})

    let Submit2 = (e) => {
        e.preventDefault()
    }

    let Email2 = () => {
        setLoading(true)
        fetch('https://www.wp-course.site/wp-json/youthink/subscribe', {
            method: 'post',
            body: JSON.stringify({ email: emailAD.current.value }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            response.json().then((json) => {
                setSubscriptionResponse(json)
                setLoading(false)
            }).catch(e => console.log(e))
        })
            .catch(e => console.log(e))
    }

    return (
        <div className="footer-basic">
            <footer id="fot32">
                <div className="col-lg-4 mt-3 mt-lg-0 offset-lg-1" id="Emial13" >
                    <form id="Subs" onSubmit={Submit2}>
                        <h5 id="word2">Subscribe to our newsletter!!</h5>
                        <p id="word1">Monthly digest of whats new and exciting from us.</p>
                        <div id="oioisiis" className="d-flex w-100 gap-2">
                            <label className="visually-hidden">Email address</label>
                            <input type="text" id="text213" className="form-control" placeholder="Email address" ref={emailAD} />
                            <button disabled={loading} className="btn btn-primary" id="button12" type="button" onClick={Email2}>
                                {loading ? <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    : <>Subscribe</>}
                            </button>
                        </div>
                        {subscriptionResponse.message && <p id="subs123299" style={{ color: subscriptionResponse.success ? 'green' : 'red' }}>
                            {subscriptionResponse.message}
                        </p>}
                    </form>
                </div>
                <div id="OWOW2">
                    <div className="social"><a href="#"><i className="icon ion-social-instagram"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-facebook"></i></a></div>
                    <ul id="OWOW" className="list-inline">
                        <li className="list-inline-item"><a id="osakso" href="#">Services</a></li>
                        <li className="list-inline-item"><a id="osakso" href="#">About</a></li>
                        <li className="list-inline-item"><a id="osakso" href="#">Terms</a></li>
                        <li className="list-inline-item"><a id="osakso" href="#">Privacy Policy</a></li>
                    </ul>
                    <p className="copyright">Company Name A69A © 2002</p>
                </div>
            </footer >
        </div>
    )
};

export default Footer
