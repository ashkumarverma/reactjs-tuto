import React from 'react';

class People {
    constructor(name, address) {
        this.name = name,
        this.address = address
    }
    getAge() {
        return `25`;
    }
}
class Doctor extends People {
    constructor(name, address, specification) {
        super(name, address);
        this.specification = specification;
    }
    getDoctorAge() {
        let age = super.getAge();
        return age;
    }
}

class Student extends People {
    constructor(name, address, subject) {
        super(name, address);
        this.subject = subject;
    }
}

const JsonObjects = {
    "students": [
        {
            Name: "Ravi",
            Add: "Vns",
            Age: "5"
        },
        {
            Name: "Sumit",
            Add: "Blr",
            Age: "8"
        },
    ]
}

const getStudentsDetails = (item, index) => {

}

class Home extends React.Component {
    render() {
        const json = JsonObjects;
        const title = 'Testing Variables';
        const people = new People('Ravi', 'Bangalore');
        const doctor = new Doctor('Shashi', 'Bangalore', 'Orthopadic');
        const student = new Student('Niku', 'Bangalore', 'Physics');
        return (
            <div className="any-text litegrey2 padding100">
                <div className="container">
                    <div className="row">
                        <div className="info-box centered">
                            <p>

                                {
                                    json.students.map((val, i) => {
                                        return val.Name
                                    })
                                }

                            </p>
                            <p>{people.name} lives in {people.address}</p>
                            <p>{doctor.name} lives in {doctor.address} and his specification in {doctor.specification}. His age is {doctor.getDoctorAge()}</p>
                            <p>{student.name} lives in {student.address} and researches in {student.subject}</p>
                            <Fun title={title} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
class Fun extends React.Component {
    render() {
        const funHere = () => {
            alert('Hi, This is fun');
        }
        return (
            <div>
                <h1>{this.props.title}</h1>
                <button onClick={funHere}>Click</button>
                <p>This is testing class.</p>
            </div>
        );
    }
}

export default Home;