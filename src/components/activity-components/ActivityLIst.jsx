import React from 'react'

const ItemList = ({ activity, slideMarginLeft }) => {

    return (
        <div key={activity.activityTitle} className='activity-list-item' style={{marginLeft: slideMarginLeft}}>
            <img src={activity.activityImage} />
            <div className='overlay-text'>
                <span>{ activity.activityTitle }</span>
                <p>{ activity.activityContent.substring(0, 90) + "..." }</p>
            </div>
        </div>
    )
}


const ActivityLIst = ({ activities, slideMarginLeft }) => {
    const listItems = activities.map((activity, index) =>
        <ItemList key={index} activity={activity}  slideMarginLeft={ index == 0 ? slideMarginLeft + 'px' : 0}/>
    );

    return (
        <div className="activity-lists">
            <div className='activity-shadow'></div>
            {listItems}
            <div className='last-activity-message'>
                <span>You've reach the last activity.</span>
            </div>
        </div>
    )
}

export default ActivityLIst