--[[
  Swagger Petstore
 
  This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 
  OpenAPI spec version: 1.0.0
  Contact: apiteam@swagger.io
  Generated by: https://github.com/swagger-api/swagger-codegen.git
]]
-- Pet class
local Pet = {}
local Pet_mt = {
	__name = "Pet";
	__index = Pet;
}

local function cast_Pet(t)
	return setmetatable(t, Pet_mt)
end

local function new_Pet(id, category, name, photoUrls, tags, status)
	return cast_Pet({
		["id"] = id;
		["category"] = category;
		["name"] = name;
		["photourls"] = photoUrls;
		["tags"] = tags;
		["status"] = status;
	})
end

return {
	cast = cast_Pet;
	new = new_Pet;
}
