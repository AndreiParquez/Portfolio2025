export default function experience() {
  return (
    <>
      <div className=" mt-8">
        <span className="text-zinc-300 text-xs px-2 rounded-md py-1 bg-zinc-700 text-start">
          Experience
        </span>
      </div>
      <div className="my-2 flex flex-col space-y-8">
        <div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-white font-semibold">
                Front-End Web Developer Intern
              </p>
              <p className="text-xs text-gray-300">Inventive Media | 2025</p>
            </div>
            <img
              src="https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/311894678_484952257002162_5163071262404402041_n.png?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEodcPZLNC1zvcVV4LZezVJHCP9oWbOH_YcI_2hZs4f9oeGDvDRI-GF1nEuVDrzOvJn2iYvVkhvmqSoVCbgruXI&_nc_ohc=Y6CcvrEwZrQQ7kNvwFdwn0a&_nc_oc=AdlJdfKqGqKccY-PmJPp0k_8gjEV98iJtkjxOJSCQ4BEtTJv3dCt_U-vU4-AVGNCw_ArRESzQ3JMmN62TAipJ_Zb&_nc_zt=23&_nc_ht=scontent.fmnl4-7.fna&_nc_gid=T-zKheOyEF-VatcuYkS-pA&oh=00_AfWQCRtNodpc2-5z6x1Y2IpvnMMWQdmtB0aWgZg6QM8YDA&oe=68992115"
              alt="Inventive Media Logo"
              className="w-12 h-12 rounded-sm"
            />
          </div>
          <div className="mt-3 space-y-2 px-4">
            <div className="flex items-start gap-2">
              <div className="w-1 h-1 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Built Attendance System with React & Laravel for employee
                tracking.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1 h-1 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Delivered training sessions and corporate client support.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1 h-1 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Developed responsive Exam App for training assessments.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-white font-semibold">
                Freelance Web Developer
              </p>
              <p className="text-xs text-gray-300">Self-employed | 2023-2025</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br rounded-sm flex items-center justify-center">
            </div>
          </div>
          <div className="mt-3 space-y-2 px-4">
            <div className="flex items-start gap-2">
              <div className="w-1 h-1 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Developed custom websites for students and small business
                clients.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1 h-1 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Implemented responsive design and SEO best practices.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1 h-1 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Built user-friendly interfaces using React, Tailwind CSS, and
                WordPress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
