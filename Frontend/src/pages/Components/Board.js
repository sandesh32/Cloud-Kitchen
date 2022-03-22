import Tile from "./Tile";

const Board = (props) => {
    const fooddetail=props.fooddetail;
    const title=fooddetail.title;
    const foods=fooddetail.food;

    return ( 
        <div className="board">
        <h1 className="board_title"> {title} </h1>
        <div class="content">
            {/* <Navbar/> */}
            {foods.map((food)=> (
                <Tile food={food} key={food._id}/>
            )
        )}
            {/* <Tile />
            <Tile/>
            <Tile/> */}
        </div>
        </div>
        
     );
}

export default Board;