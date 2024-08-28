import { analytics } from "@/utils/analytics";


export default async function middleware(req){
    console.log("TRACKING");
    
    try{
        analytics.track("page-view",{
            page: '/store/:path*',

        })        
    } catch(error) {
        // RUN SILENTLY
        console.log(error)
    }
    

}

export const config = {
    matcher : ['/store/:path*']
}