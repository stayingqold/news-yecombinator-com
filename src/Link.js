import React from "react";
import MediaQuery from 'react-responsive';

function timeDifference(created) {
    const current = parseInt(new Date().getTime().toString())
    const previous = parseInt(new Date(created).getTime().toString()) * 1000

    const elapsed = current - previous

    const milliSecondsPerMinute = 60 * 1000
    const milliSecondsPerHour = milliSecondsPerMinute * 60
    const milliSecondsPerDay = milliSecondsPerHour * 24
    const milliSecondsPerMonth = milliSecondsPerDay * 30
    const milliSecondsPerYear = milliSecondsPerDay * 365
    
    if (elapsed < milliSecondsPerMinute) {
      return 'less than 1 min ago'
    } else if (elapsed < milliSecondsPerHour) {
      return Math.round(elapsed / milliSecondsPerMinute) + ' minutes ago'
    } else if (elapsed < milliSecondsPerDay) {
      return Math.round(elapsed / milliSecondsPerHour) + ' hours ago'
    } else if (elapsed < milliSecondsPerMonth) {
      return Math.round(elapsed / milliSecondsPerDay) + ' days ago'
    } else if (elapsed < milliSecondsPerYear) {
      return Math.round(elapsed / milliSecondsPerMonth) + ' months ago'
    } else {
      return Math.round(elapsed / milliSecondsPerYear) + ' years ago'
    }
  }

const Link = ({ num_comments, created, points, author, title, permalink, index}) => {
    const link = "https://reddit.com" + permalink
    return (
    <div className="flex mt2 items-start">
      <div className="flex items-start">
        <div className="gray">{parseInt(index, 10) + 1}.</div>
          <div className="ml1 gray f11 cursor" >
            ▲
          </div>
      </div>
      <div className="ml1 items-start tl">
        <div  className="flexwrap" style={{flex: 1, alignItems: 'left', justifyContent: 'left', overflow:'wrap'}}>
          <a href={link} style={{textDecoration: 'none', color: 'black'}}>{title} </a>
          <a className="gray cursor f11" style={{"wordBreak": "break-all"}}href={link} target="__blank">
            ({permalink.substring(8)})
          </a>
        </div>
        <div className="f11 lh-copy gray">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <span className="score">{points} points by </span>
                            <span className="reddituser">{author} </span>
                            <span className="created"> {timeDifference(created)} | </span>
                            <a href={link} style={{textDecoration: 'none', color: 'grey'}} className="num_comments">{num_comments} comments</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            
        </div>
      </div>
    </div>
  );
};

export default Link;
