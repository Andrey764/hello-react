export class User{
    constructor(Name, Surname, Patronymic, Phone, Email){
        this.Name=Name;
        this.Surname=Surname;
        this.Patronymic=Patronymic;
        this.Phone=Phone;
        this.Email=Email;
    }

    getUser(){
        return(
            <table>
                <tr>
                    <td>Фамилия</td>
                    <td>{this.Surname}</td>
                </tr>
                <tr>
                    <td>Имя</td>
                    <td>{this.Name}</td>
                </tr>
                <tr>
                    <td>Отчество</td>
                    <td>{this.Patronymic}</td>
                </tr>
                <tr>
                    <td>номер телефона</td>
                    <td>{this.Phone}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{this.Email}</td>
                </tr>
            </table>
        );
    }
}
