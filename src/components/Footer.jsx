import React from "react";
import { IconButton } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

const Footer = () => {
    return(
        <footer>
            <div className="col-md-12">
                <IconButton 
                    href="http://github.com/mserna"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHub/>
                </IconButton>
                <IconButton 
                    href="https://www.linkedin.com/in/matthew-serna-ruiz-46a1a073/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedIn/>
                </IconButton>

                <div className="copyright py-4 text-center">
                    <div className="container">
                        <small>
                            Copyright &copy;{" "}
                            {"2024-2025"}
                        </small>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;