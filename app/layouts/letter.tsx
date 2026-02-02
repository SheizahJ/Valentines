
export default function Letter() {

    const handleYesClick = () => {
        alert("Yes Clicked!");
    };
    
    const handleNoClick = () => {
        const messages = [
            "lol this button doesn't do anything..."
        ];
        
        alert("No Clicked...");
    };

    return (
        <div className="content">
            <h1 className="text-center">Some Title Here</h1>
            <hr />

            <p className="fst-italic fw-bold signature">
                My Dearest, Some Name
            </p>

            <p className="text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut corporis necessitatibus perferendis suscipit velit cupiditate vitae laboriosam et animi voluptatibus beatae laborum magni voluptatem, sunt commodi vel nihil repudiandae quasi.
            </p>
            <p className="text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut corporis necessitatibus perferendis suscipit velit cupiditate vitae laboriosam et animi voluptatibus beatae laborum magni voluptatem, sunt commodi vel nihil repudiandae quasi.
            </p>
            <p className="text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut corporis necessitatibus perferendis suscipit velit cupiditate vitae laboriosam et animi voluptatibus beatae laborum magni voluptatem, sunt commodi vel nihil repudiandae quasi.
            </p>
            <p className="text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut corporis necessitatibus perferendis suscipit velit cupiditate vitae laboriosam et animi voluptatibus beatae laborum magni voluptatem, sunt commodi vel nihil repudiandae quasi.
            </p>
            <p className="text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut corporis necessitatibus perferendis suscipit velit cupiditate vitae laboriosam et animi voluptatibus beatae laborum magni voluptatem, sunt commodi vel nihil repudiandae quasi.
            </p>

            <p className="text-end fst-italic fw-bold signature">
                Yours Truly, Some Other Name
            </p>

            <br />

            <h4 className="text-center">
                Some Question Here?
            </h4>

            <div className="option-box">
                <button type="button" id="yes-btn" onClick={handleYesClick}>Yes</button>
                <button type="button" id="no-btn" onClick={handleNoClick}>No</button>
            </div>
        </div>
    );
}
