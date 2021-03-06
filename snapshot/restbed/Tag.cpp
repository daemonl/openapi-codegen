/**
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator 1.5.0.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

#include "Tag.h"

#include <string>
#include <sstream>
#include <boost/property_tree/ptree.hpp>
#include <boost/property_tree/json_parser.hpp>

using boost::property_tree::ptree;
using boost::property_tree::read_json;
using boost::property_tree::write_json;


Tag::Tag()
{
    m_id = ;
    m_name = ;
    }

Tag::~Tag()
{
}

std::string Tag::toJsonString()
{
	std::stringstream ss;
	ptree pt;
	pt.put("id", m_id);
	pt.put("name", m_name);
	write_json(ss, pt, false);
	return ss.str();
}

void Tag::fromJsonString(std::string const& jsonString)
{
	std::stringstream ss(jsonString);
	ptree pt;
	read_json(ss,pt);
	m_id = pt.get("id", );
	m_name = pt.get("name", );
}

int Tag::getId() const
{
    return m_id;
}
void Tag::setId(int value)
{
    m_id = value;
}
string Tag::getName() const
{
    return m_name;
}
void Tag::setName(string value)
{
    m_name = value;
}


