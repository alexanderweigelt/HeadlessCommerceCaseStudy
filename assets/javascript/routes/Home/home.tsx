import React, { ReactElement } from "react";
import { Heading } from "../../components/Headings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons"
import { Accordion } from "react-bootstrap";

export const Home = (): ReactElement => {
    return (
        <>
            <Heading element={'h1'}>
                Headless eCommerce
            </Heading>
            <Accordion defaultActiveKey={'0'}>
                <Accordion.Item eventKey={'0'}>
                    <Accordion.Header>Fallstudie</Accordion.Header>
                    <Accordion.Body>
                        <Heading element={'h2'}>
                            Fallstudie
                        </Heading>
                        <p>Am Beispiel eine Kategorieseite soll untersucht werden, ob eine Umstellung auf ein Headless
                            E-Commerce technisch machbar und sinnvoll wäre. Dabei sind folgende Punkte wichtig:</p>
                        <ul>
                            <li>Clientseitiges oder serverseitiges Rendering?</li>
                            <li>Welche API-Architektur soll zum Einsatz kommen?</li>
                            <li>Wäre das Javascript Framework geeignet?</li>
                            <li>Suchmaschinenoptimierung (SEO)?</li>
                            <li>Nutzerfreundlichkeit/Nutzererfahrung (UI/UX)?</li>
                            <li>
                                Ist eine Umstellung auf ein Headless E-Commerce grundlegend sinnvoll (Aufwand gegen
                                Nutzen)?
                            </li>
                        </ul>
                        <Heading element={'h3'}>
                            Der Fall
                        </Heading>
                        <p><strong>Ausgangslage</strong></p>
                        <p>Der Betreiber einer E-Commerce-Plattform plant in seinem System die technische Trennung von
                            Frontend und Backend. Um dies zu erreichen, soll eine Neuauflage des Shopsystem erfolgen,
                            wobei auf ein sogenanntes Headless E-Commerce-System umgestellt wird.
                        </p>
                        <p><strong>Was versteht man unter Headless E-Commerce?</strong></p>
                        <p>&quot;Headless E-Commerce&quot; ist ein E-Commerce-System, bei dem das Backend, in dem
                            Bestellungen und Zahlungen verarbeitet und Daten gespeichert werden, von der
                            Benutzeroberfläche technisch getrennt ist. Auf der Benutzeroberfläche interagiert der
                            Benutzer, z.B. bei der Bestellung. Beide Systeme können jeweils eine eigenständige
                            Applikation sein. Sie interagieren über eine Schnittstelle miteinander.</p>
                        <Heading element={'h3'}>
                            Fallbeispiel
                        </Heading>
                        <p><em>zu definieren</em></p>
                        <Heading element={'h3'}>
                            Analyse
                        </Heading>
                        <p><em>zu definieren</em></p>
                        <Heading element={'h3'}>
                            Fazit
                        </Heading>
                        <p><em>zu definieren</em></p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        Case study
                        <span className={'text-muted'}>
                            (<FontAwesomeIcon icon={faLanguage}/> english version)
                        </span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <h1 id="case-study">Case study</h1>
                        <p>Using the example of a category page, we will examine whether a conversion to headless
                            e-commerce would be technically possible. The following points are important:</p>
                        <ul>
                            <li>Client-side or server-side rendering?</li>
                            <li>Which API architecture should be used?</li>
                            <li>Which Javascript framework?</li>
                            <li>Search Engine Optimisation (SEO)?</li>
                            <li>User interface/user experience (UI/UX)?</li>
                            <li>Is a switch to headless e-commerce useful (effort vs. benefit)?</li>
                        </ul>
                        <Heading element={'h2'}>
                            The case
                        </Heading>
                        <p><strong>Initial situation</strong></p>
                        <p>The operator of an e-commerce platform is planning the technical separation of frontend and
                            backend in his system. In order to achieve this, the shop system is to be relaunched and
                            switched to a so-called headless e-commerce system.</p>
                        <p><strong>What is headless e-commerce?</strong></p>
                        <p>&quot;Headless e-commerce&quot; is an e-commerce system in which the backend, where orders
                            and payments are processed and data is stored, is technically separated from the user
                            interface. The user interacts on the user interface, e.g. when placing an order. Both
                            systems can each be an independent application. They interact with each other via an
                            interface.</p>
                        <Heading element={'h3'}>
                            Example object
                        </Heading>
                        <p><em>to be defined</em></p>
                        <Heading element={'h3'}>
                            Analysis
                        </Heading>
                        <p><em>to be defined</em></p>
                        <Heading element={'h3'}>
                            Summary
                        </Heading>
                        <p><em>to be defined</em></p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}
