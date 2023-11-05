import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';
import cimg1 from '../../images/service-single/img-2.jpg'
import cimg2 from '../../images/service-single/img-3.jpg'
import cimg3 from '../../images/service-single/img-4.jpg'
import cimg4 from '../../images/service-single/img-5.jpg'
import cimg5 from '../../images/service-single/img-6.jpg'
import cimg6 from '../../images/service-single/img-7.jpg'
import cimg7 from '../../images/service-single/img-9.jpg'
import cimg8 from '../../images/service-single/img-8.jpg'



const Categorys = (props) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

      
    const Ctegory = [
        {
           Id:'1',
           dse1:'Ut enim ad minim veniam, quis nostrud exercitation ullamc ex ea commodo consequat. Duis aute irure dolor in repreh esse cillum dolore eu fugiat nulla pariatur.',
           dse2:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut nim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in eprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
           dse3:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
           dse4:'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour,sure there isn t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.',
           dImg1:cimg1,
           dImg2:cimg2,
        },
        {
           Id:'2',
           dse1:'Ut enim ad minim veniam, quis nostrud exercitation ullamc ex ea commodo consequat. Duis aute irure dolor in repreh esse cillum dolore eu fugiat nulla pariatur.',
           dse2:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut nim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in eprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
           dse3:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
           dse4:'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour,sure there isn t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.',
           dImg1:cimg3,
           dImg2:cimg4,
        },
        {
           Id:'3',
           dse1:'Ut enim ad minim veniam, quis nostrud exercitation ullamc ex ea commodo consequat. Duis aute irure dolor in repreh esse cillum dolore eu fugiat nulla pariatur.',
           dse2:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut nim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in eprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
           dse3:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
           dse4:'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour,sure there isn t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.',
           dImg1:cimg5,
           dImg2:cimg6,
        },
        {
           Id:'4',
           dse1:'Ut enim ad minim veniam, quis nostrud exercitation ullamc ex ea commodo consequat. Duis aute irure dolor in repreh esse cillum dolore eu fugiat nulla pariatur.',
           dse2:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut nim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in eprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
           dse3:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
           dse4:'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour,sure there isn t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.',
           dImg1:cimg7,
           dImg2:cimg8,
        },


    ]

    return(
        <div className="tab-area">
            <div className="tablinks">
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            Breakfast
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Airport Taxi
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                        >
                            Game Room
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '4' })}
                            onClick={() => { toggle('4'); }}
                        >
                            Spa salon
                        </NavLink>
                    </NavItem>
                    
                </Nav>
            </div>

            <TabContent activeTab={activeTab}>
                {Ctegory.map((ctgry, ctg) => (
                    <TabPane tabId={ctgry.Id} key={ctg}>  
                       <p>{ctgry.dse1}</p>
                       <p>{ctgry.dse2}</p>
                       <div className="img-area">
                            <img src={ctgry.dImg1} alt=""/>
                            <img src={ctgry.dImg2} alt=""/>
                        </div>
                        <p>{ctgry.dse3}</p>
                        <p>{ctgry.dse4}</p>
                    </TabPane>
                ))}
            </TabContent>
        </div>
    )
}

export default Categorys;