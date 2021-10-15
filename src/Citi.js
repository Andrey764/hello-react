export class Citi{
    constructor(Title, Country, YearFoundation, pathsPictures=[]){
        this.Title = Title;
        this.Country = Country;
        this.YearFoundation = YearFoundation;
        this.pathsPictures = pathsPictures;
    }
    getSiti(){
        return(
            <table>
                <tr>
                    <td>Название города</td>
                    <td>{this.Title}</td>
                </tr>
                <tr>
                    <td>Страна</td>
                    <td>{this.Country}</td>
                </tr>
                <tr>
                    <td>Год основания</td>
                    <td>{this.YearFoundation}</td>
                </tr>
            </table>
        );
    }
    getPaths(){
        return(
            <ul>
                {this.pathsPictures.map((path, i) => (
                    <li key={i}>
                        <img key={i} src={path}/>
                    </li>
                ))}
            </ul>
        );
    }
}