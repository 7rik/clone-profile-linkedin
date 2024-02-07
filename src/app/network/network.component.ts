import { Component } from "@angular/core";
import { faPaperPlane, faUserPlus } from "@fortawesome/free-solid-svg-icons";

@Component ({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})

export class NetworkComponent {
  public icons = {
    sendMessage: faPaperPlane,
    connect: faUserPlus
  }
}
