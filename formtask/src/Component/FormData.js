import { useState } from "react";
import "./form.css";

function FormData() {
    const [name, setName] = useState(localStorage.getItem("nameData"));
    const [gender, setGender] = useState(localStorage.getItem("genderStore") === "Female" ? "Female" : "Male");
    const [date, setDate] = useState("");
    const [language, setLanguage] = useState("");
    const [salary, setSalary] = useState("");
    const [phoneno, setPhoneno] = useState(localStorage.getItem("phoneno"));
    const [adharno, setAdharno] = useState(localStorage.getItem("adharno"));

    const [hindi, setHindi] = useState(false);
    const [english, setEnglish] = useState(false);
    const [german, setGerman] = useState(false);
    const [spanish, setSpanish] = useState(false);



    const handleOnSubmit = (event) => {
        event.preventDefault()
        const objFormData = {}
        /* console.log("CheckDataComing:",name,gender,date,salary,phoneno,adharno,
        hindi,english,german,spanish) */

        const lanArray = [];

        if (hindi === true) {
            lanArray.push('Hindi')
        }
        if (english === true) {
            lanArray.push('English')
        }
        if (german === true) {
            lanArray.push('German')
        }
        if (spanish === true) {
            lanArray.push('Spanish')
        }

        objFormData.language = lanArray;
        objFormData.name = name;
        objFormData.gender = gender;
        objFormData.date = date;
        objFormData.salary = salary;
        objFormData.phoneno = phoneno;
        objFormData.adharno = adharno;

        console.log("FormData:", objFormData)

        localStorage.setItem("nameData", name);
        localStorage.setItem("salaryData", salary);
        localStorage.setItem("genderStore", gender);
        localStorage.setItem("date", date);
        localStorage.setItem("phoneno", phoneno);
        localStorage.setItem("adharno", adharno);

        localStorage.setItem("lanEnglish", english);

    }

    const languageChangeHindi = (languageData) => {
        setHindi(!hindi)
    }
    const languageChangeEnglish = (languageData) => {
        setEnglish(!english)
    }
    const languageChangeGerman = (languageData) => {
        setGerman(!german)
    }
    const languageChangeSpanish = (languageData) => {
        setSpanish(!spanish)
    }
    return (
        <form onSubmit={handleOnSubmit}>
            <div className="mainDiv">
                <h1 className="mainHeading">Employee Form</h1>
                <div className="namePerson">

                </div>

                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Enter your name</span>
                    </div>
                    <input type="text"
                        class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Gender:</span>
                    </div>
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="Male" >Male</option>
                        <option value="Female" >Female</option>
                    </select>

                </div>


                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">DOB:</span>
                    </div>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Language known:</span>
                    </div>

                    <input type="checkbox" name="Hindi" value="Hindi"
                        onChange={(e) => languageChangeHindi(e.target.value)} />
                    <label> Hindi </label>
                    <input type="checkbox" name="English" value="English"
                        onChange={(e) => languageChangeEnglish(e.target.value)} />
                    <label> English </label>
                    <input type="checkbox" name="German" value="German"
                        onChange={(e) => languageChangeGerman(e.target.value)} />
                    <label> German </label>
                    <input type="checkbox" name="Spanish" value="Spanish"
                        onChange={(e) => languageChangeSpanish(e.target.value)} />
                    <label> Spanish </label>
                </div>


                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Salary expected:</span>
                    </div>
                    <input type="radio" name="salary" value="30"
                        onChange={(e) => setSalary(e.target.value)} />
                    <label >30 INR</label>
                    <input type="radio" name="salary" value="40"
                        onChange={(e) => setSalary(e.target.value)} />
                    <label >40 INR</label>
                    <input type="radio" name="salary" value="50"
                        onChange={(e) => setSalary(e.target.value)} />
                    <label >50 INR</label>
                </div>


                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Phone no.</span>
                    </div>
                    <input type="number"
                        class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                        value={phoneno}
                        onChange={(e) => setPhoneno(e.target.value)}
                    />
                </div>

                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Aadhar no.</span>
                    </div>
                    <input type="number"
                        class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                        value={adharno}
                        onChange={(e) => setAdharno(e.target.value)}
                    />
                </div>

                <div className="submit">
                    <input class="btn btn-primary" type="submit" value="Submit" />
                </div>
            </div>
        </form>
    )
}

export default FormData;