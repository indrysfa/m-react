import { defaultContext } from "@tanstack/react-query";
import { Component } from "react";

class Carausel extends Component {
    state = {
        active: 0,
    }
    
    static defaultProps = {
        images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
    }
}