import Tile from "./Tile";

const Board = () => {
    return ( 
        <div className="board">
        <h1 className="board_title"> This weeks most selling!!</h1>
        <div class="content">
            {/* <Navbar/> */}
            <Tile/>
            <Tile/>
            <Tile/>
        </div>
        </div>
        
     );
}
 
export default Board;