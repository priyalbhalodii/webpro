import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {AccordionContext} from './AccordionWrapper';
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'; // Import icons

const AccordionItem = (props) => {

    const { active, setActive } = useContext(AccordionContext)

    const eventHandler = (e, index) => {
        e.preventDefault();
        active === index ? setActive(null): setActive(index);
       
     }

    return (
        <div className="accordion-item container ">
            <h3 className="accordion-title ">
                <button 
                    onClick={(e) => eventHandler(e, props.index)}
                    className={ active === props.index ? 'active' : 'inactive'}
                    aria-expanded={ active === props.index ? 'true' : 'false' }
                    aria-controls={ 'sect-' + (props.index + 1) } 
                    aria-disabled={ active === props.index ? 'true' : 'false' }
                >
                    <span className="title-wrapper ">{props.title}</span>  
                    <span className="icon-wrapper">
                        {/* Use FontAwesome icons here */}
                        
                        <FontAwesomeIcon icon={active === props.index ? faMinus : faPlus} /> 
                    </span>
                    
                </button>
            </h3>
            <div className="accordion-panel">
                <div id={ 'sect-' + (props.index + 1) } className={ active === props.index  ? 'panel-open' : 'panel-close' }>
                    {props.description}
                </div>
            </div>
        </div>
    )
}

AccordionItem.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default AccordionItem; 
