import Header from './_header'
import style from './page.module.css'

import cn from '@/utils/classnames'

export default async function SignInLayout({ children }: any) {
  return (
    <>
      <div
        className={cn(
          style.background,
          'flex w-full min-h-screen',
          'sm:p-4 lg:p-8',
          'gap-x-20',
          'justify-center lg:justify-start',
        )}
      >
        <div
          className={cn(
            'flex w-full flex-col bg-white shadow rounded-2xl shrink-0',
            'space-between',
          )}
        >
          <Header />
          <div
            className={cn(
              'flex flex-col items-center w-full grow justify-center',
              'px-6',
              'md:px-[108px]',
            )}
          >
            <div className="flex flex-col md:w-[400px]">{children}</div>
          </div>
          <div className="px-8 py-6 system-xs-regular text-text-tertiary flex items-center gap-2">
            Copyright© 2011-{new Date().getFullYear()}{' '}
            深圳云里物联科技有限公司.All Rights Reserved.
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAACXlBMVEUAAADax4rGxqP556zmsVD/6KXu5JvwvFPglEFnY3nnpEjosU1+XFTmuVfu13Hrv1jpsFa1k3mne2HlvnPdqmPqz3fu3YrJoWv04J/mz5z246aSi3i2p2/0zGj82WDrtFjar1O7klO4dkfimUJcWnbho0rgr1vntFfmvFflvGOZdFKXZkOUemnmv2XkuWWVe2ziqlXnt1Tr0HDpwl6ObmCkbEKqhVyOc2jdoVHmuljfrmDq0nPapWDUnErqy3XjtWXesXLrzHjz34rqzYfmw3fy4YrqyYDevW/dzoTIhkndsXLRsIneuHjlyIzQroTjuXjlyYfktWvw2prhvoHTmGfx45j3773TuYT/25LdijyKf321oXU+Nm3cumXfuWLtwlzpwVz40FvpvlvqvFfouFXjrlHipEjcmEfknEXPbzfbZyzZQR/YMBrWKBrhJhLdHxDTGg5HV4xBT4YYKYaWk4SDgYIWIYBybH0qLn1KS3tlZHpNS3WGfHIcHXEwLHAnF28rKW07NGuzn2pNQ2ruzWnDrGnuy2jryGjAnGgoH2j1x2RCNGPcrmIsEGGQdl/pu17YtV7FoV3muVxoRVzWqFvSmVp2SVbyw1XbkVTuvFPfo1PgmVPpt1LcnFLWkVLlp1F7W1HpsU92QE5oMUtFAUrpqUjnjUFOAEHUgz+DUj14FzvbczieMTdhATfodjXWcDXcbjXVcTS/Xi/hay7WXS3cWS3vYyvaVSrUVymnJSjXSyeKDSbNSiWfHCPMTyLFQiHkSR/lPxvVLRrPLBnUJRfUHhbaJxXVGxTZJxPNFhBdOhm/AAAAWXRSTlMABQIU/hIJ/v79/Pj29PPx4cC6s7CNfmxZWRv+/v7+/v7+/v78/Pr6+fPz8vHq6ujl5eTj4ODe2NTQzMW6ubKsnJeQkJCJiIOBgX9ubGpoW1lMREM0JR8dDgvYx1gAAAE7SURBVBjTYgADJmZJQUFJZiYGOGD2EzLV1jIT8paCibCJ86zctGPD1D4ecUaICKuPyYLMYznZOfNqzP0jwEJBOt1KB4/mHjqZ3dGsHwxW5M4Zk5l/PPdIQcGMShUPVqBlgQLlMSvyDq+P3HVidjWnkQQTA5MXV1SFYtb+jZGrl02si2J3Y2JgFMmILl68efueLVvXLSqLXirCCBgDow1HT+GS/AP7srblLS+K5bIHCjmodpXUr929d+eaVb3SsuouQCHhufPjShsbJk/rrK2KW8hiBxRyVkvnkI9tnaDQJDNFOU1DDOjRMEfe9Mjpiewz5RIzZmmKMoPcKqGbkJqSkBSfnDqpXS+ACeRpJ76W/uSUpDlpLPFtfK5soLAKFbU05Odm4eblN7YWk4KEGWOIp62FgYCVsG84SAAAL7BaooX965sAAAAASUVORK5CYII="
                alt="ICP备案"
                className="w-4 h-4"
              />
              粤ICP备14097764号-1{' '}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
