import React from "react";
import { IconButton } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import { GitHub } from "@mui/icons-material";

const Footer = () => {
    return(
        <footer>
            <div className="col-md-12">
                <IconButton 
                    href="www.github.com/mserna"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHub/>
                </IconButton>
                <IconButton 
                    href="www.github.com/mserna"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <InstagramIcon/>
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