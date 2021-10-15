export class Book{
    constructor(Title,Name,Surname,Patronymic,Page,Genre){
        this.Title=Title;
        this.Name = Name;
        this.Surname = Surname;
        this.Patronymic = Patronymic;
        this.Page = Page;
        this.Genre = Genre;
    }
    getHTMLBook(){
        return(
            <table>
                <tr>
                    <td>Title:</td>
                    <td>{this.Title}</td>
                </tr>
                <tr>
                    <td>Name:</td>
                    <td>{this.Name}</td>
                </tr>
                <tr>
                    <td>Surname:</td>
                    <td>{this.Surname}</td>
                </tr>
                <tr>
                    <td>Patronymic:</td>
                    <td>{this.Patronymic}</td>
                </tr>
                <tr>
                    <td>Page:</td>
                    <td>{this.Page}</td>
                </tr>
                <tr>
                    <td>Genre:</td>
                    <td>{this.Genre}</td>
                </tr>
            </table>
        );
    }
}