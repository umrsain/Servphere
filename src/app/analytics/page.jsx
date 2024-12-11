import AnalyticsDashboard from '@/components/AnalyticsDashboard';
import Navbar from '@/components/Navbar';
import { getDate } from '@/utils';
import  {analytics}  from '@/utils/analytics';
import React from 'react'

export default async function Page() {

  // VIEW DATA FOR THE PAST X NUMBER OF DAYS
  const TRACKING_DAYS = 7;

  // RETREIVE DB RECORDS FOR THE PAST X NUMBER OF DAYS
  const pageviews = await analytics.retrieveDays("page-view",TRACKING_DAYS);

  // ITERATE THROUGH EACH RECORD AND KEEP TRACK OF TOTAL PAGE VIEWS
  const totalPageViews = pageviews.reduce((acc, curr) => {
    return (
      acc + curr.events.reduce((acc,curr) => {
        return acc + Object.values(curr)[0]
      }, 0)
    )
  }, 0);

  // AVG VISITORS PER DAY
  const avgVisitorsPerDay = (totalPageViews / TRACKING_DAYS).toFixed(1);

  // AVG VISITORS TODAY
  const amtVisitorsToday = pageviews.filter((ev) => ev.date === getDate()).reduce((acc, curr) => {
    return (
      acc + curr.events.reduce((acc,curr) => {
        return acc + Object.values(curr)[0]
      }, 0)
    )
  }, 0);

  return (
    <div className='flex h-screen bg-white'>

      <Navbar/>
      <div className='min-h-screen w-full py-12 flex justify-center items-center'>
        <div className='relative w-full max-w-6xl mx-auto text-white'>
          <AnalyticsDashboard 
            avgVisitorsPerDay = {avgVisitorsPerDay}
            amtVisitorsToday = {amtVisitorsToday}
            timeseriesPageView = {pageviews}
          />
        </div>
      </div>
    </div>
  )
}
 