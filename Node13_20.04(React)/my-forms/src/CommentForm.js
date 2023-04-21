import React,{useState} from 'react'
export default function CommentForm(){
    const [comment,setComment] = useState();
    const [choice, setChoice] = useState("3D Print");
    const changeCommentHandler = event=>{
        event.preventDefault();
        setComment ( event.target.value);
    }
    const changeChoiceHandler=event=>{
        event.preventDefault();
        setChoice(event.target.value);
    }
    const handleSubmit = event=>{

        event.preventDefault();

        let str = `Ви залишили коментар стосовно послуги ${choice}:

        ${comment}`;

        alert(str);

    }


    return(
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label  htmlFor='select' className='form-label' value={choice}>Our services: </label>
                <select className="form-select"  onChange={changeChoiceHandler}>
                    <option value={1}>Create model</option>
                    <option value={2}>3D Print</option>
                    <option value={3}>3 optuon</option>
                    <option value={4}>4 option</option>
            </select>
            </div>
            <div className='mb-3'>

            <label htmlFor='comment' className='form-label'>Коментар:</label>

            <textarea className='form-control' rows={4} onChange={changeCommentHandler}

            value={comment}></textarea>

        </div>

        <input type='submit' className='btn btn-secondary' value="Leave Comment"></input>
        </form>
    )
}