import NewMeetingForm from "./NewMeetingForm";
import MeetingsList from "./MeetingsList";
import MeetingsPage from "./MeetingsPage";

export default function UserPanel({email, onLogout}) {

    return(
        <div>
            <h1>Witaj {email}</h1>
            <a onClick={() => onLogout()}> Wyloguj </a>
            <br/>
            <MeetingsPage />
        </div>
    );

}