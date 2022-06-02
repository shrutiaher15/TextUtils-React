
export default function About() {
    return (<>
        <div className="row">
            <hr />
            <h2 class="h1-responsive font-weight-bold text-center">About Us</h2>
            <hr />
        </div>
        <div className="clearfix">
            <img src="/my-pic.jpeg" className="col-md-3 float-md-start mb-3 ms-md-3 mx-5" alt="about-us-page" />

            <h3 className="mx-10 my-3 mt-10">Hello, Shruti Aher here!</h3>
            <i style={{ fontSize: '20px' }}>Application Developer at Thoughtworks</i>
            <div className="container my-5">
                <ul>
                    <li style={{ marginBottom: '20px' }}>This project has been the part of my React learning journey.</li>
                    <li style={{ marginBottom: '10px' }}>Github Link : </li>
                </ul>
            </div >
        </div>
    </>
    )
}
