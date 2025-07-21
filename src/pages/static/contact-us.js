import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import * as L from "leaflet"
import LeftSidebar from '../sub-components/left-sidebar';
import Breadcrumb from '../sub-components/breadcrumb';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { hideLoader, showLoader } from '../../actions/loader-action';

function ConctactUsPage() {
    const customIcon = L.icon({
        iconUrl: 'img/marker.png',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
    });
    const breadcrumb = [
        <Link to="/">Home</Link>,
        "Contact us"
    ];
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(showLoader(true));
        setTimeout(() => {dispatch(hideLoader(false))}, 1000);

    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Breadcrumb value={breadcrumb}/>
                </div>
                <LeftSidebar />
                <div className="col-lg-9">
                    <div id="contact" className="box">
                        <h1>Contact</h1>
                        <p className="lead">
                            Are you curious about something? Do you have some kind of problem
                            with our products?
                        </p>
                        <p>
                            Please feel free to contact us, our customer service center is
                            working for you 24/7.
                        </p>
                        <hr />
                        <div className="row">
                            <div className="col-md-4">
                                <h3>
                                    <i className="fa fa-map-marker" />
                                    Address
                                </h3>
                                <p>
                                    13/25 New Avenue
                                    <br />
                                    New Heaven
                                    <br />
                                    45Y 73J
                                    <br />
                                    England
                                    <br />
                                    <strong>Great Britain</strong>
                                </p>
                            </div>
                            {/* /.col-sm-4*/}
                            <div className="col-md-4">
                                <h3>
                                    <i className="fa fa-phone" /> Call center
                                </h3>
                                <p className="text-muted">
                                    This number is toll free if calling from Great Britain otherwise
                                    we advise you to use the electronic form of communication.
                                </p>
                                <p>
                                    <strong>+33 555 444 333</strong>
                                </p>
                            </div>
                            {/* /.col-sm-4*/}
                            <div className="col-md-4">
                                <h3>
                                    <i className="fa fa-envelope" /> Electronic support
                                </h3>
                                <p className="text-muted">
                                    Please feel free to write an email to us or to use our
                                    electronic ticketing system.
                                </p>
                                <ul>
                                    <li>
                                        <strong>
                                            <Link to="mailto:">info@fakeemail.com</Link>
                                        </strong>
                                    </li>
                                    <li>
                                        <strong>
                                            <Link to="#">Ticketio</Link>
                                        </strong>{" "}
                                        - our ticketing support platform
                                    </li>
                                </ul>
                            </div>
                            {/* /.col-sm-4*/}
                        </div>
                        {/* /.row*/}
                        <hr />
                        <div id="map">
                            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                                <TileLayer
                                    attribution='&copy; <Link to="https://www.openstreetmap.org/copyright">OpenStreetMap</Link> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[51.505, -0.09]} icon={customIcon}>
                                    <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                        <hr />
                        <h2>Contact form</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="firstname">Firstname</label>
                                        <input id="firstname" type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="lastname">Lastname</label>
                                        <input id="lastname" type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input id="email" type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="subject">Subject</label>
                                        <input id="subject" type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            className="form-control"
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 text-center">
                                    <button type="submit" className="btn btn-primary">
                                        <i className="fa fa-envelope-o" /> Send message
                                    </button>
                                </div>
                            </div>
                            {/* /.row*/}
                        </form>
                    </div>
                </div>
                {/* /.col-md-9*/}
            </div>
        </div>
    )
}

export default ConctactUsPage;