using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Web.Script.Serialization;
using System.Web.Services;
using Demo.Models;

namespace Demo.Service
{
    /// <summary>
    /// Summary description for StudentService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
     [System.Web.Script.Services.ScriptService]
    public class StudentService : System.Web.Services.WebService
    {
        [WebMethod]
        public void GetStudentTotals()
        {
            studentTotals totals = new studentTotals();

            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            using (SqlConnection con = new SqlConnection(cs))
            {
                SqlCommand cmd = new SqlCommand("SELECT COALESCE(Gender, 'GrandTotal') AS Gender, COUNT(*) AS Total FROM tblStudents GROUP BY ROLLUP(Gender)", con);
                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())
                {
                    switch (rdr["Gender"].ToString())
                    {
                        case "Male":
                            totals.males = Convert.ToInt32(rdr["Total"]);
                            break;
                        case "Female":
                            totals.females = Convert.ToInt32(rdr["Total"]);
                            break;
                        default:
                            totals.total = Convert.ToInt32(rdr["Total"]);
                            break;
                    }
                }
            }

            JavaScriptSerializer js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(totals));
        }
        [WebMethod]
        public void GetStudentsByName(string name)
        {
            List<Student> listStudents = new List<Student>();

            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            using (SqlConnection con = new SqlConnection(cs))
            {
                SqlCommand cmd =
                    new SqlCommand("Select * from tblStudents where name like @name", con);
                SqlParameter param = new SqlParameter()
                {
                    ParameterName = "@name",
                    Value = name + "%"
                };
                cmd.Parameters.Add(param);

                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())
                {
                    Student student = new Student();
                    student.id = Convert.ToInt32(rdr["Id"]);
                    student.name = rdr["Name"].ToString();
                    student.gender = rdr["Gender"].ToString();
                    student.city = rdr["City"].ToString();
                    listStudents.Add(student);
                }
            }

            JavaScriptSerializer js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(listStudents));
        }

        [WebMethod]
        public void GetAllStudents()
        {
            //System.Threading.Thread.Sleep(2000);
            List<Student> listStudents = new List<Student>();
            string cs = System.Configuration.ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            using(SqlConnection conn = new SqlConnection(cs) )
            {
                SqlCommand cmd = new SqlCommand("select * from tblStudents",conn);
                conn.Open();
                SqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())
                {
                    Student student = new Student();
                    student.id = Convert.ToInt32(rdr["id"]);
                    student.name = rdr["name"].ToString();
                    student.city = rdr["city"].ToString();
                    student.gender = rdr["gender"].ToString();
                    listStudents.Add(student);
                }
            }
            JavaScriptSerializer js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(listStudents));
        }

        [WebMethod]
        public void GetStudent(int id)
        {            
            string cs = System.Configuration.ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            Student student = new Student();
            using (SqlConnection conn = new SqlConnection(cs))
            {
                SqlCommand cmd = new SqlCommand("Select * from tblStudents where id = @id", conn);

                SqlParameter param = new SqlParameter()
                {
                    ParameterName = "@id",
                    Value = id
                };

                cmd.Parameters.Add(param);
                conn.Open();
                SqlDataReader rdr = cmd.ExecuteReader();
                
                while (rdr.Read())
                {                    
                    student.id = Convert.ToInt32(rdr["id"]);
                    student.name = rdr["name"].ToString();
                    student.city = rdr["city"].ToString();
                    student.gender = rdr["gender"].ToString();                    
                }
            }
            JavaScriptSerializer js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(student));
        }
    }
}
