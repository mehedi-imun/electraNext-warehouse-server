import React from 'react';
import PageTitle from '../../Shared/PageTittle/PageTitle';

const BLog = () => {
    return (
        <div>
            <PageTitle title='blog'></PageTitle>
            <h3 className='text-center my-3 w-25 mx-auto '>QNA <hr />  </h3>
            <div className='container mt-2'>
                <h4>1. Difference between javascript and nodejs ?</h4>
                <p>
                    Javascript: is a high-level programming language. that is used for writing scripts on the website.
                    NodeJS : is a cross platform and open source javascript runtime .that allows the javascript to be run on the server side.
                    javascript :is capable enough to add html and play with the DOM.
                    Nodejs : does't have capebility to add html tags.
                    javascript: is used in frontend development,ECMA script that uses chrome's V8 engine written in C++.
                    nodejs : is used in server side development ,node is writen in C, C++ and Javascript
                </p>
                <h4> 2. When should you use nodejs and when should you use mongodb?</h4>
                <p>
                    First, why did you ever think of Node.js?
                    Most likely, because they see the advantages of JavaScript everywhere. js  it is the first ever environment supporting JavaScript both client-side and server-side.
                    Node.js made life easier for the well known web/mobile applications developers named Amazon, LinkedIn, PayPal, Netflix, Reddit, Tumblr, eBay, etc. All of the mentioned websites/apps are built using Node.js.
                    Node. js is primarly used for non blocking, event driven servers  due to its single threaded nature. its used for traditional web sites and back end apiservices, designed with real time, push based arckitectures in mind.
                    There are plenty of better solutions other than Node.js for powering your CPU-intensive app. its just not the best technology at hand when it comes to heavy computation.
                    MongoDB: stores data records as BSON documents. BSON is a binary representiation of JSON documents, though it contains more data types than JSON.
                    most businesses use MongoDB as a distributed database on multiple, geographically dispersed servers in a configuration called a cluster. Clusters allow a MongoDB database to scale horizontally across many servers with sharding auto balancing.
                    MongoDB was built for people building internet and business applications who need to evolve quickly and scale elegatly. companies and development teams of all sizes use MongoDB for a wide variety of reasons.
                </p>
                <h4>3. Differences between sql and nosql databases?</h4>
                <p>
                    when it comes to choosing a database the bigest decision is pick relational SQL or non relational NoSQL data structure. while both the database are viable options stil there are certain key difference between the two that users must keep in mind making a decision.
                    SQL:These databases have fixed or static or predefined schema.
                    NoSQL:Thea have dynamic schema
                    SQL: Follows ACID property.These databases are not suited for hierarchical data storage.
                    NoSQL: Follows CAP consistency, availability, partition tolerance.These databases are best suited for hierarchical data storage.

                </p>
                <h4>4. What is the purpose of jwt and how does it work</h4>
                <p>
                    JSON web Token JWT is an open standard RFC 7519 for securey transmiting information between parties as JSON object.
                    it is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider idP . So the integrity and authenticity of the token can be verified by other parties involved.
                    The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.
                </p>
            </div>


        </div>
    );
};

export default BLog;