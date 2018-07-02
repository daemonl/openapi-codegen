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
/*
 * Order.h
 *
 * 
 */

#ifndef Order_H_
#define Order_H_



undefined
#include <memory>


/// <summary>
/// 
/// </summary>
class  Order
{
public:
    Order();
    virtual ~Order();
    
    std::string toJsonString();
    void fromJsonString(std::string const& jsonString);

    /////////////////////////////////////////////
    /// Order members
    
    /// <summary>
    /// 
    /// </summary>
    int getId() const;
    void setId(int value);
    /// <summary>
    /// 
    /// </summary>
    int getPetId() const;
    void setPetId(int value);
    /// <summary>
    /// 
    /// </summary>
    int getQuantity() const;
    void setQuantity(int value);
    /// <summary>
    /// 
    /// </summary>
    string getShipDate() const;
    void setShipDate(string value);
    /// <summary>
    /// Order Status
    /// </summary>
    string getStatus() const;
    void setStatus(string value);
    /// <summary>
    /// 
    /// </summary>
    bool getComplete() const;
    void setComplete(bool value);

protected:
    int m_id;
    int m_petId;
    int m_quantity;
    string m_shipDate;
    string m_status;
    bool m_complete;
};


#endif /* Order_H_ */
